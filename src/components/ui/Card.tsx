import Image from "next/image";

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

export default function Card({
  icon,
  title,
  description,
  className = "",
}: CardProps) {
  return (
    <div
      className={`p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow ${className}`}
    >
      {icon && (
        <div className="mb-4">
          <Image src={icon} alt={title} width={60} height={60} />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
