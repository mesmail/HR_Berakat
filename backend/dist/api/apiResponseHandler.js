"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponseHandler {
    static download(req, res, path) {
        return __awaiter(this, void 0, void 0, function* () {
            res.download(path);
        });
    }
    static success(req, res, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (payload !== undefined) {
                res.status(200).send(payload);
            }
            else {
                res.sendStatus(200);
            }
        });
    }
    static error(req, res, error) {
        return __awaiter(this, void 0, void 0, function* () {
            if (error &&
                [400, 401, 403, 404].includes(error.code)) {
                res.status(error.code).send(error.message);
            }
            else {
                console.error(error);
                res.status(500).send(error.message);
            }
        });
    }
}
exports.default = ApiResponseHandler;
//# sourceMappingURL=apiResponseHandler.js.map