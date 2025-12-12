<?php

$newParent = ltrim(sprintf(
    '%s.%s',
    $parent,
    $currentRelationName,
), '.');

$signer = $this->createSigner(new SigningConfig(
    algorithm: SigningAlgorithm::SHA256,
    key: 'my_secret_key',
    minimumExecutionDuration: Duration::second(),
), $clock = new MockClock());

$this->database->execute(
    query(Migration::class)->insert(
        name: $migration->name,
        hash: $this->getMigrationHash($migration),
    ),
);

query(Migration::class)->insert(
    name: $migration->name,
    hash: $this->getMigrationHash($migration),
);

$id = query(Book::class)
    ->insert(title: 'Timeline Taxi')
    ->then(
        fn (PrimaryKey $id) => query(Chapter::class)->insert(
            ['title' => 'Chapter 01', 'book_id' => $id],
            ['title' => 'Chapter 02', 'book_id' => $id],
        ),
        fn (PrimaryKey $id) => query(Chapter::class)->insert(
            ['title' => 'Chapter 03', 'book_id' => $id],
        ),
    )
    ->execute();
