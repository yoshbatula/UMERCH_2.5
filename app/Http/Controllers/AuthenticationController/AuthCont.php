<?php
namespace App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use GrahamCampbell\ResultType\Success;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AuthCont extends Controller {

        // This function is for handling the users authentication
        // The authentication with the UM ID, Email, and Password is for testing purposes only
        // Also for the password without hashing is for testing purposes only
        public function authenticateUser(Request $request) {
            $user = User::where('um_id', $request->um_id)
            ->where('email', $request->email)
            ->first();

            if($user && Hash::check($request->user_password, $user->user_password)) {
                Auth::login($user);
                $request->session()->regenerate();
                return redirect()->intended('/');
            } else {
                return back()->withErrors([
                    'um_id' => 'The provided credentials do not match our records.',
                    'email' => 'The provided credentials do not match our records.',
                    'user_password' => 'The provided credentials do not match our records.',
                ])->onlyInput('um_id');
            }
        }
    }

?>