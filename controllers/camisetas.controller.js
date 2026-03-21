import * as camisetasService from '../services/camisetas.services.js';

export async function getCamisetas(req, res) {
  try {
    const filtros = req.query;
    const resultado = await camisetasService.getCamisetas(filtros);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export async function getCamisetaById(req, res) {
  try {
    const {id} = req.params;
    const resultado = camisetasService.getCamisetaById(id);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}