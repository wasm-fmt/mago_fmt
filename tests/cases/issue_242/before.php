<?php

function redundant_parens_for_binary_in_ternary(): void
{
    return $rowCount > 1 ? ($formatted . ' rows') : ($formatted . ' row');
}

function redundant_parens_for_unary_in_ternary(): void
{
    return $value !== '' ? ((string) preg_replace_callback('/[0-9]/', $this->replaceCallback, $value)) : $value;
}
