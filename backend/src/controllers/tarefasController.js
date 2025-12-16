const Tarefa = require('../models/tarefaModel');

exports.listar = (req, res) => {
  Tarefa.listarTodas((err, resultados) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao listar tarefas' });
    }
    res.json(resultados);
  });
};

exports.criar = (req, res) => {
  const { descricao } = req.body;
  if (!descricao) {
    return res.status(400).json({ erro: 'Descrição é obrigatória' });
  }

  Tarefa.criar(descricao, (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao criar tarefa' });
    }
    res.status(201).json({ id: resultado.insertId, descricao, status: 0 });
  });
};

exports.concluir = (req, res) => {
  const { id } = req.params;

  Tarefa.atualizarStatus(id, 1, (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao atualizar tarefa' });
    }
    res.json({ mensagem: 'Tarefa marcada como concluída' });
  });
};

exports.remover = (req, res) => {
  const { id } = req.params;

  Tarefa.remover(id, (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao remover tarefa' });
    }
    res.json({ mensagem: 'Tarefa removida com sucesso' });
  });
};
