import { Button, EButtonType, ETextMode, ETextType, Text } from "../../atoms";
import useDrawer from "../../hooks/useDrawer";
import { onButtonClicked } from "./helpers";
import { INavbarParam } from "./interfaces";
import hamburgerMenuIcon from "/src/assets/icos/humburger-menu.svg";

const Navbar = ({
  sectionRefs: { aboutMeRef, educationRef, projectsRef, welcomeRef },
}: INavbarParam) => {
  const { openDrawer, closeDrawer } = useDrawer();

  const navbarButtons = [
    {
      ref: projectsRef,
      text: "Projects",
    },
    {
      ref: aboutMeRef,
      text: "About Me",
    },
    {
      ref: educationRef,
      text: "Education",
    },
  ];

  const getSidebarButtons = () =>
    navbarButtons.map(({ ref, text }) => (
      <Button
        key={text}
        type={EButtonType.CONTENT_ONLY}
        onClick={() => {
          onButtonClicked(ref);
          closeDrawer();
        }}
      >
        <Text className="w-full" type={ETextType.H6} alignment="start">
          {text}
        </Text>
      </Button>
    ));

  const onBurgerClicked = () => openDrawer(getSidebarButtons());

  return (
    <header className="z-50 bg-darkGray fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-36">
      <Button
        type={EButtonType.CONTENT_ONLY}
        onClick={() => onButtonClicked(welcomeRef)}
      >
        <Text type={ETextType.T1} mode={ETextMode.BOLD}>
          Isaac CV
        </Text>
      </Button>
      <div className="self-end hidden sm:flex">
        {navbarButtons.map(({ ref, text }) => (
          <Button
            key={text}
            type={EButtonType.CONTENT_ONLY}
            onClick={() => onButtonClicked(ref)}
          >
            <Text className="w-full" type={ETextType.T3} alignment="end">
              {text}
            </Text>
          </Button>
        ))}
      </div>
      <button className="aspect-square h-8 sm:hidden" onClick={onBurgerClicked}>
        <img className="w-full invert" src={hamburgerMenuIcon} alt="menu" />
      </button>
    </header>
  );
};

export default Navbar;
