import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
            <div>landing page (Unprotected)</div>

            <Link href="/sign-in">
                <button>Login</button>
            </Link>

            <Link href="/sign-up">
                <button>Register</button>
            </Link>
        </div>
    );
};

export default LandingPage;
