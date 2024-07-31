<?php

require_once 'Database.php';
require_once 'Crud.php';

// Obter a conexão com o banco de dados
$database = new Database();
$db = $database->getConnection();

// Instanciar o CRUD
$crud = new Crud($db);

// Dados do novo usuário
$nome = 'Admin';
$email = 'admin@admin.com';
$senha = password_hash('admin123', PASSWORD_DEFAULT);
$permissao = '1';
$status = 'true';

// Query de inserção
$createQuery = "INSERT INTO usuarios (nome, email, senha, permissao, status) VALUES (:nome, :email, :senha, :permissao, :status)";

// Preparar e executar a query
$stmt = $db->prepare($createQuery);
$stmt->bindParam(':nome', $nome);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':senha', $senha);
$stmt->bindParam(':permissao', $permissao);
$stmt->bindParam(':status', $status);

if ($stmt->execute()) {
    echo "Usuário inserido com sucesso!";
} else {
    echo "Erro ao inserir o usuário.";
}

?>
