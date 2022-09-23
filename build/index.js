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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/home", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ "message": "hello" });
}));
app.post("/home", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, link } = req.body;
    const encurta_link = yield database_1.default.links.create({
        data: {
            email: email,
            link_original: link,
            link_encurtado: '12345'
        }
    });
    return res.json(encurta_link);
}));
app.listen(3456, () => { console.log('servidor aberto!'); });
