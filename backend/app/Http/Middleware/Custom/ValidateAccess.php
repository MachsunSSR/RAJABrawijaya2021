<?php

namespace App\Http\Middleware;

use Closure;

class ValidateAccess
{
    public function handle($request, Closure $next, ...$allowedToAccess)
    {
        $userAccess = auth()->guard('web')->accesses();

        $allowed = false;
        foreach ($userAccess as $userAccess) {
            foreach ($allowedToAccess as $allowed) {
                if ($userAccess == $allowed)  {
                    $allowed = true;
                    break;
                }
            }

            if ($allowed) break;
        }

        if (!$allowed) {
            return redirect('superteam')->with('failed_message', 'Akun anda tidak memiliki akses');
        }

        return $next($request);
    }
}
