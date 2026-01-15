import LogoType from "./Logo.types";
import logo_img from "@assets/images/logo.jpg";
import { HOME_ROUTES } from "@constants/routes";

export default function Logo({ className }: LogoType) {
    return (
        <a href={HOME_ROUTES.ROOT}>
            <img src={logo_img} alt="Лого" className={className} />;
        </a>
    );
}
