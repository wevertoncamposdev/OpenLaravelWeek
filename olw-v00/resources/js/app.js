import './bootstrap';
import dashboard from './components/dashboard';

import Alpine from 'alpinejs';
import dashboard from './components/dashboard';

window.Alpine = Alpine;
Alpine.data('dashboard', dashboard);
Alpine.start();
