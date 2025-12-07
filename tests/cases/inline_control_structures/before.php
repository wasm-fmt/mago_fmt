<?php while ($i < 10): ?>
    <?php $i++; ?>
<?php endwhile; ?>

<?php if ($foo): ?>
    Foo
<?php elseif ($bar): ?>
    Bar
<?php else: ?>
    Neither
<?php endif; ?>

<?php foreach ($items as $item): ?>
    <li><?= $item ?></li>
<?php endforeach; ?>

<?php for ($i = 0; $i < 10; $i++): ?>
    <li><?= $i ?></li>
<?php endfor; ?>

<?php while ($i < 10): ?>
    <li><?= $i ?></li>
    <?php $i++; ?>
<?php endwhile; ?>

<?php do { ?>
    <li><?= $i ?></li>
    <?php $i++; ?>
<?php } while ($i < 10);

?>
