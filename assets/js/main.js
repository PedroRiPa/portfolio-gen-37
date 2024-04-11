import parallax from "./components/parallax.js";
import resetToHome from "./helpers/reload_page.js";
import activeMenu from "./components/selected_menu.js";
import updateCopyright from "./helpers/date_updater.js";
import sendEmail from "./helpers/send_forms.js";

parallax();
activeMenu();
resetToHome();
updateCopyright();
sendEmail();
