<?php if ($foo) { ?>
    <?= strtr($this->trace, [
        '#DD0000' => 'var(--string)',
    '#007700' => 'var(--keyword)',
        '#0000BB' => 'var(--default)',
        '#FF8000' => 'var(--comment)',
    ]) ?>

    <?= strtr($this->trace, [
            '#DD0000' => 'var(--string)',
         '#007700' => 'var(--keyword)',
             '#0000BB' => 'var(--default)',
            '#FF8000' => 'var(--comment)',
        ]); ?>
<?php } ?>
