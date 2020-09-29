
/**
 * @param SERVER
 * @param SERVER.PORT
 * @param SERVER.URL_API_HOST
 */
export const API_PATH = process.env.API_PATH || `api`
export const SERVER = {
    PORT: process.env.PORT || `2111`,
    URL_API_HOST: process.env.URL_API_HOST || `${API_PATH}.manga.net`,
    DOCS_PATH: process.env.DOCS_PATH || `documents`
}
