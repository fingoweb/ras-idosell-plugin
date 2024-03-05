import {
  MAIN_PAGE,
  MAIN_PAGE_HOTSPOT_ONE,
  MAIN_PAGE_HOTSPOT_THREE,
  MAIN_PAGE_HOTSPOT_TWO,
  PRODUCTS_LIST,
  PRODUCT_DETAILS_ASSOCIATED_ONE,
  PRODUCT_DETAILS_ASSOCIATED_TWO,
  PRODUCT_DETAILS_PAGE,
} from 'consts/pages';
import { TProductContainers, TProductSelectors } from 'types/product';

const PRODUCT_LIST_SELECTOR = '#search';
const ASSOCIATED_ONE_PORODUCTS_LIST_SELECTOR = '#products_associated_zone1';
const ASSOCIATED_TWO_PORODUCTS_LIST_SELECTOR = '#products_associated_zone2';

const MAIN_PAGE_HOT_SPOT_ONE_LIST_SELECTOR = '#main_hotspot_zone1';
const MAIN_PAGE_HOT_SPOT_TWO_LIST_SELECTOR = '#main_hotspot_zone2';
const MAIN_PAGE_HOT_SPOT_THREE_LIST_SELECTOR = '#main_hotspot_zone3';

const PRODUCT_ID_KEY = 'product_id';
const PRODUCT_DISABLE_KEY = 'product_disable';
const PRODUCT_CLASS = 'product';

const DATA_PRODUCT_ID = 'data-product_id';
const DATA_PRODUCT_SELECTOR = `[${DATA_PRODUCT_ID}]`;

const PRODUCT_DETAILS_PAGE_SELECTOR = '#projector_form';
const ASSOCIATED_PRODUCT_ID = 'data-product-id';
const ASSOCIATED_PRODUCT_SELECTOR = '.product';

const HOT_SPOT_PRODUCT_ID = 'data-product-id';
const HOT_SPOT_PRODUCT_SELECTOR = '.product';

const PRODUCT_CONTAINERS: TProductContainers = {
  [PRODUCTS_LIST]: PRODUCT_LIST_SELECTOR,
  [PRODUCT_DETAILS_PAGE]: {
    [PRODUCT_DETAILS_ASSOCIATED_ONE]: ASSOCIATED_ONE_PORODUCTS_LIST_SELECTOR,
    [PRODUCT_DETAILS_ASSOCIATED_TWO]: ASSOCIATED_TWO_PORODUCTS_LIST_SELECTOR,
  },
  [MAIN_PAGE]: {
    [MAIN_PAGE_HOTSPOT_ONE]: MAIN_PAGE_HOT_SPOT_ONE_LIST_SELECTOR,
    [MAIN_PAGE_HOTSPOT_TWO]: MAIN_PAGE_HOT_SPOT_TWO_LIST_SELECTOR,
    [MAIN_PAGE_HOTSPOT_THREE]: MAIN_PAGE_HOT_SPOT_THREE_LIST_SELECTOR,
  },
};

const PRODUCT_SELECTORS: TProductSelectors = {
  [PRODUCTS_LIST]: DATA_PRODUCT_SELECTOR,
  [PRODUCT_DETAILS_PAGE]: ASSOCIATED_PRODUCT_SELECTOR,
  [MAIN_PAGE]: HOT_SPOT_PRODUCT_SELECTOR,
};

export {
  PRODUCT_LIST_SELECTOR,
  PRODUCT_CONTAINERS,
  DATA_PRODUCT_SELECTOR,
  DATA_PRODUCT_ID,
  PRODUCT_ID_KEY,
  ASSOCIATED_PRODUCT_ID,
  ASSOCIATED_PRODUCT_SELECTOR,
  ASSOCIATED_ONE_PORODUCTS_LIST_SELECTOR,
  ASSOCIATED_TWO_PORODUCTS_LIST_SELECTOR,
  PRODUCT_SELECTORS,
  PRODUCT_CLASS,
  PRODUCT_DISABLE_KEY,
  PRODUCT_DETAILS_PAGE_SELECTOR,
  HOT_SPOT_PRODUCT_ID,
};
