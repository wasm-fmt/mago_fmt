<?php

$permitted =
    is_user_authenticated() // check is the user is authenticated in the system
    && (
        is_user_granted('ROLE_EDIT') // And has `ROLE_EDIT` role
        || is_user_admin() // Or is an administrator
    );

function sample(string $sql, int $time)
{
    $shouldRecord =
        $sql !== 'select 1' // sql ignore
        && (
            $time > config('log-ext.sql.info_time', 1000) // greater than config
            || preg_match("/^\s*(update|delete|insert|replace)\s*/i", $sql) // update/delete/insert/replace
        );
}
