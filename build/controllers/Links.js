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
exports.LinksController = void 0;
const Prisma_1 = __importDefault(require("../Prisma"));
class LinksController {
    static index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.params;
                if (!email || email == 'public') {
                    return res.status(401).json({ "error": "email ausente" });
                }
                let busca_links = yield Prisma_1.default.usuarios.findFirst({
                    where: {
                        email: email
                    },
                    include: {
                        links: true
                    }
                });
                return res.json({
                    email: email,
                    links: busca_links === null || busca_links === void 0 ? void 0 : busca_links.links.filter(item => item.tipo == 'link'),
                    files: busca_links === null || busca_links === void 0 ? void 0 : busca_links.links.filter(item => item.tipo == 'file')
                });
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
    }
    static show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { link } = req.params;
                if (!link) {
                    return res.status(401).json({ "error": "link ausente" });
                }
                let busca_links = yield Prisma_1.default.links.findFirst({
                    where: {
                        link_encurtado: link
                    }
                });
                if (!busca_links) {
                    return res.status(404).json({ "error": "link inexistente" });
                }
                return res.json(busca_links);
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
    }
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { email, nome, link, tamanho, tamanho_completo, caminho, tipo } = req.body;
                email ? email : email = 'public';
                if (!link) {
                    return res.status(401).json({ "error": "link ausente" });
                }
                if (email) {
                    let busca_usuarios = yield Prisma_1.default.usuarios.findFirst({
                        where: {
                            email: email
                        }
                    });
                    if (!busca_usuarios) {
                        yield Prisma_1.default.usuarios.create({
                            data: {
                                email: email
                            }
                        });
                    }
                }
                const cria_link = yield Prisma_1.default.links.create({
                    data: {
                        email: email,
                        tipo: tipo,
                        nome: nome,
                        link: link,
                        link_encurtado: Math.random().toString(36).substring(2) + Date.now().toString(36),
                        tamanho: tamanho,
                        tamanho_completo: tamanho_completo,
                        caminho: caminho
                    }
                });
                return res.json(cria_link);
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
    }
}
exports.LinksController = LinksController;
exports.default = LinksController;
