import { CassdoorSDK } from "@webadmin/casdoor";
export const sdkConfig:CassdoorSDK = {
  serverUrl: process.env.SERVER_URL || 'http://localhost:8000',
  clientId: process.env.CLIENT_ID || '',
  clientSecret: process.env.CLIENT_SECRET || '',
  organizationName: process.env.ORGANIZATION_NAME||'',
  appName: process.env.APP_NAME || '',
  redirectPath: process.env.REDIRECT_PATH || '',
};