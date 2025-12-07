<?php

final class Issue157
{
    private function streamIncomeStatement(): Response
    {
        return new StreamedJsonResponse([
            'accounts' => isset($configuration['remove_zero_amount_cost_centres']) && Type\bool()->assert($configuration['remove_zero_amount_cost_centres'])
                ? $incomeStatement->getNonZeroResults()
                : $incomeStatement->getResults(),
        ]);
    }
}
