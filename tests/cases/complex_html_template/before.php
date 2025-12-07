<?php if ($condition1): ?>
    <div class="outer-div">
        <?php if ($condition2): ?>
            <p>Some text inside nested condition.</p>
            <?php for ($i = 0; $i < 5; $i++): ?>
                <span>Item <?= $i ?></span>
                <?php if ($i % 2 == 0): ?>
                    <img src="image<?= $i ?>.jpg" alt="Image <?= $i ?>">
                <?php else: ?>
                    <?php if ($condition3): ?>
                        <a href="link<?= $i ?>">Link <?= $i ?></a>
                    <?php endif; ?>
                <?php endif; ?>
            <?php endfor; ?>
        <?php else: ?>
            <ul>
              <?php $items = ["one", "two", "three"]; ?>
              <?php foreach ($items as $item): ?>
                <li><?= strtoupper($item) ?></li>
              <?php endforeach; ?>
            </ul>
        <?php endif; ?>
    </div>
<?php endif; ?>