import * as response from "../util/response.json";
import * as UserService from "../services/user.service";


export async function test(req, res) {
    try {
        // TODO: CHECKING VALIDATION FROM INPUT
        // let validateResult = UserValidator.validateRegister(req.body);
        // if (validateResult.error) {
        //     return response.error(res, req, {
        //         message: validateResult.error.details[0].message
        //     });
        // }
        let data = await UserService.test(req.body)
        return response.success(res, data, 200)
    } catch (error) {
        return response.error(res, req, error)
    }
}

