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
exports.ArquivosController = void 0;
const Prisma_1 = __importDefault(require("../Prisma"));
class ArquivosController {
    static index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let busca_arquivos = yield Prisma_1.default.arquivos.findMany();
                return res.json(busca_arquivos);
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
    }
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, nome, link_download, caminho, tamanho, tamanho_completo } = req.body;
                if (!nome || !link_download || !tamanho) {
                    return res.status(401).json({ "error": "dados incompletos" });
                }
                yield Prisma_1.default.links.create({
                    data: {
                        email: email ? email : 'public',
                        Link_download: link_download,
                        nome: nome,
                    }
                });
                yield Prisma_1.default.arquivos.create({
                    data: {
                        email: email ? email : 'public',
                        nome: nome,
                        link_download: link_download,
                        tamanho: tamanho,
                        tamanho_completo: tamanho_completo,
                        caminho: caminho
                    }
                });
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
    }
}
exports.ArquivosController = ArquivosController;
