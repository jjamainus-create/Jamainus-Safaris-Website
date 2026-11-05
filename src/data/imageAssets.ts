import gorillaHeroImg from '../assets/images/hero_mountain_gorilla_bwindi_1793590046557.jpg';
import sipiFallsImg from '../assets/images/sipi_falls_mount_elgon_1793590046688.jpg';
import savannahWildlifeImg from '../assets/images/uganda_wildlife_savannah_1793590048052.jpg';
import coffeeHarvestImg from '../assets/images/coffee_harvest_cultural_heritage_1793590049324.jpg';
import namugongoShrineImg from '../assets/images/namugongo_faith_shrine_1793590049036.jpg';
import flyerImg from '../assets/images/jamainus_safaris_official_flyer.jpg';

// Regulatory & Association Recognition Logos
import autoLogo from '../assets/images/AUTO.png';
import mtwaLogo from '../assets/images/MTWA.jpg';
import tgfuLogo from '../assets/images/TGFU.png';
import utbLogo from '../assets/images/utb_logo.jpg';
import yutoLogo from '../assets/images/YUT0.jpg';

export const CERTIFICATION_LOGOS = {
  MTWA: mtwaLogo,
  UTB: utbLogo,
  AUTO: autoLogo,
  TGFU: tgfuLogo,
  YUTO: yutoLogo,
};

export const SAFARI_IMAGES = {
  gorillaHero: gorillaHeroImg || '/assets/images/hero_mountain_gorilla_bwindi.jpg',
  sipiFalls: sipiFallsImg || '/assets/images/sipi_falls_mount_elgon.jpg',
  savannahWildlife: savannahWildlifeImg || '/assets/images/uganda_wildlife_savannah.jpg',
  coffeeHarvest: coffeeHarvestImg || '/assets/images/coffee_harvest_cultural_heritage.jpg',
  namugongoShrine: namugongoShrineImg || '/assets/images/namugongo_faith_shrine.jpg',
  officialFlyer: flyerImg || '/assets/images/jamainus_safaris_official_flyer.jpg',
  certLogos: CERTIFICATION_LOGOS,
};
