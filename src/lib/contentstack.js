/**
 * Contentstack stack client — single instance shared across the app.
 *
 * In development (import.meta.env.DEV) we route through the Preview API so
 * draft / unpublished entries are visible without having to publish them first.
 * In production every request goes through the standard Delivery API and only
 * published entries are returned.
 *
 * Required env vars (add to .env with the VITE_ prefix so Vite exposes them):
 *   VITE_CS_API_KEY          – Stack API key
 *   VITE_CS_DELIVERY_TOKEN   – Delivery token (tied to VITE_CS_ENVIRONMENT)
 *   VITE_CS_PREVIEW_TOKEN    – Preview token  (for unpublished / draft content)
 *   VITE_CS_ENVIRONMENT      – Environment name shown in CS → Settings → Environments
 *   VITE_CS_REGION           – us | eu | au | azure-na | azure-eu (default: us)
 */

import contentstack, { Region } from '@contentstack/delivery-sdk';

const REGION_MAP = {
  us: Region.US,
  eu: Region.EU,
  au: Region.AU,
  'azure-na': Region.AZURE_NA,
  'azure-eu': Region.AZURE_EU,
  'gcp-na': Region.GCP_NA,
  'gcp-eu': Region.GCP_EU,
};

const region = REGION_MAP[import.meta.env.VITE_CS_REGION ?? 'us'] ?? Region.US;
const isDev = import.meta.env.DEV;

const stackConfig = {
  apiKey: import.meta.env.VITE_CS_API_KEY,
  deliveryToken: import.meta.env.VITE_CS_DELIVERY_TOKEN,
  environment: import.meta.env.VITE_CS_ENVIRONMENT,
  region,
  // Route through the Preview API in development so draft entries are visible.
  ...(isDev && {
    live_preview: {
      enable: true,
      preview_token: import.meta.env.VITE_CS_PREVIEW_TOKEN,
      host: 'rest-preview.contentstack.com',
    },
  }),
};

const stack = contentstack.stack(stackConfig);

export default stack;
