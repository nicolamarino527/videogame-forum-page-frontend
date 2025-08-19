import React from "react";

export default function BecameMemberPage() {
    return (
        <div className="container text-center text-white my-5">
            <br />
            <br />
            <br />

            <h1 className="text-yellow mb-4">Become a Member</h1>
            <p className="lead">
                The registration form to become a GameForum member is not available yet,
                but it will be released soon.
            </p>
            <p>
                In the meantime, if you want to join our community and request the
                <span className="text-yellow fw-bold"> User </span> role,
                please contact us via email:
            </p>
            <p>
                <a
                    href="mailto:support@gameforum.com"
                    className="text-yellow text-decoration-none fw-bold"
                >
                    <br />
                    support@gameforum.com
                </a>
            </p>
            <p className="mt-4 greish">
                Stay tuned for updates – we can’t wait to welcome you as part of our community!
            </p>
        </div>
    );
}
