const db = require('../config/db');

const Tarefa = {
  listarTodas: (callback) => {
    const sql = 'SELECT * FROM tarefas ORDER BY data_criacao DESC';
    db.query(sql, callback);
  },

  criar: (descricao, callback) => {
    const sql = 'INSERT INTO tarefas (descricao) VALUES (?)';
    db.query(sql, [descricao], callback);
  },

  atualizarStatus: (id, status, callback) => {
    const sql = 'UPDATE tarefas SET status = ? WHERE id = ?';
    db.query(sql, [status, id], callback);
  },

  remover: (id, callback) => {
    const sql = 'DELETE FROM tarefas WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Tarefa;
