// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; // Disable automatic adding of CSS since we will add it manually

library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn, faHeart);
