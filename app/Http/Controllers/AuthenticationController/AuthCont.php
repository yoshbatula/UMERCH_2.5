<?php
namespace App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use GrahamCampbell\ResultType\Success;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
class AuthCont extends Controller {

        // This function is for handling the users authentication
        // The authentication with the UM ID, Email, and Password is for testing purposes only
        // Also for the password without hashing is for testing purposes only
        public function showLoginForm() {
            return Inertia::render('Authentication');
        }

        public function login(Request $request)
        {
            $credentials = $request->validate([
                'login' => 'required|string',
                'password' => 'required|string',
                'remember' => 'boolean'
            ]);
            $loginField = filter_var($credentials['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'um_id';
            $user = User::where($loginField, $credentials['login'])->first();
            if ($user) {
                $dbPassword = $user->user_password;
                $inputPassword = $credentials['password'];
                $isBcrypt = strpos($dbPassword, '$2y$') === 0;
                $valid = $isBcrypt ? Hash::check($inputPassword, $dbPassword) : $inputPassword === $dbPassword;
                if ($valid) {
                    Auth::login($user);
                    $request->session()->regenerate();
                    return redirect()->intended('/authentication');
                }
            }
            return back()->withErrors([
                'login' => 'The provided credentials do not match our records.',
            ]);
        }
    }

