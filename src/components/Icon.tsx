type Props = {
  icon: string;
  classes?: string;
};

const Icon = ({ icon, classes }: Props) => {
  return <img className={classes} src={icon} alt="" />;
};

export default Icon;
