import React from "react";

type TechBadgeProps = {
  nome: string;
  textColor?: string;
  bgColor?: string;
};

export const TechBadge: React.FC<TechBadgeProps> = ({
  nome,
  textColor = "text-emerald-400",
  bgColor = "bg-emerald-900/80",
}) => {
  return (
    <span className={`inline-block px-2 py-1 rounded-md ${textColor} ${bgColor}`}>
      {nome}
    </span>
  );
};

export default TechBadge;
