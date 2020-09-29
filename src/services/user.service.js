import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { mongo } from "mongoose";

import * as logger from "../util/logger";

/**
 * 
 * @param {Object} object 
 */
export async function test(object) {
    try {
        return { TEST: "OK" }
    } catch (error) {
        logger.error(error);
        return Promise.reject(error);
    }
}