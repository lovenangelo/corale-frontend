import {
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  SearchIcon,
  MoveRightIcon,
  MoveDownIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MapPin,
  MenuIcon,
  GithubIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  PlusIcon,
  MinusIcon,
  StarIcon,
  CreditCardIcon,
  Loader2,
  XIcon,
  Trash2Icon,
  EditIcon,
} from "lucide-react";

const Icons = {
  nav: {
    favorites: HeartIcon,
    profile: UserIcon,
    checkout: ShoppingBagIcon,
    menu: MenuIcon,
  },
  editIcon: EditIcon,
  deleteIcon: Trash2Icon,
  closeIcon: XIcon,
  spinner: Loader2,
  creditCard: CreditCardIcon,
  starIcon: StarIcon,
  minusIcon: MinusIcon,
  plusIcon: PlusIcon,
  search: SearchIcon,
  arrowRight: MoveRightIcon,
  arrowDown: MoveDownIcon,
  mapPin: MapPin,
  chevronRight: ChevronRightIcon,
  chevronDownIcon: ChevronDownIcon,
  socialMedia: {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    youtube: YoutubeIcon,
    github: GithubIcon,
  },
};

export default Icons;