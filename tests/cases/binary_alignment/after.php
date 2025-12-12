<?php

final class EntityRepository implements EntityRepositoryInterface
{
    // ...

    private function addSearchClause(
        QueryBuilder $queryBuilder,
        SearchDto $searchDto,
        EntityDto $entityDto,
        string $databasePlatformFqcn,
    ): void {
        // ...

        foreach ($queryTerms as $queryTerm) {
            // ...

            $queryTermConditions = new Orx();
            foreach ($searchablePropertiesConfig as $propertyConfig) {
                $entityName = $propertyConfig['entity_name'];

                // this complex condition is needed to avoid issues on PostgreSQL databases
                if (
                    $propertyConfig['is_small_integer'] && $isSmallIntegerQueryTerm
                    || $propertyConfig['is_integer'] && $isIntegerQueryTerm
                    || $propertyConfig['is_numeric'] && $isNumericQueryTerm
                ) {
                    // ...
                }
            }
        }
    }

    private function isValidBoolean(mixed $value): bool
    {
        return (
            $value === false
            || $value === 'false'
            || $value === 0
            || $value === '0'
            || $value === true
            || $value === 'true'
            || $value === 1
            || $value === '1'
        );
    }
}
