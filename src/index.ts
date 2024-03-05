import {
  MAIN_PAGE_HOTSPOT_ONE,
  PRODUCT_DETAILS_ASSOCIATED_ONE,
} from 'consts/pages';
import { initAdManager } from 'managers/AdManager/AdManager.utils';
import { initTemplateManager } from 'managers/TemplateManager/TemplateManager.utils';
import getCurrentPageInfo from 'utils/helpers/getCurrentPageInfo';
import mapConfigPages from 'utils/helpers/mapConfigPages';

window.sponsoredProductConfig = {
  isLoaderVisible: true,
  productsListing: {
    isEnabled: true,
    productsCount: 3,
  },
  pageDetails: {
    isEnabled: true,
    zone: PRODUCT_DETAILS_ASSOCIATED_ONE,
    productsCount: 1,
  },
  mainPage: {
    isEnabled: true,
    zone: MAIN_PAGE_HOTSPOT_ONE,
    productsCount: 1,
  },
};

const runApp = async () => {
  try {
    const page = getCurrentPageInfo();

    if (!page) return;

    const configPage = window.sponsoredProductConfig[mapConfigPages(page)];

    if (typeof configPage === 'object' && !configPage.isEnabled) return;

    const AdManager = initAdManager(page);
    AdManager.injectAdnPixelScript();

    const TemplateManager = initTemplateManager(page);

    TemplateManager.checkDOMforTemplates();
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }
};

if (document.readyState !== 'loading') {
  runApp();
} else {
  window.addEventListener('DOMContentLoaded', async () => {
    runApp();
  });
}
