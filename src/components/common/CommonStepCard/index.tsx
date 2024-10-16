import React from "react";

interface StepProps {
  Icon?: React.ReactNode;
  IconSize?: number;
  statusText?: string;
  title: string;
  body: string;
  statusColor: string;
  statusClassName?: string;
  statusTextClassName?: string;
}

const CommonStepCard: React.FC<StepProps> = ({
  title,
  body,
  Icon,
  IconSize,
  statusText,
  statusColor,
  statusClassName,
  statusTextClassName,
}) => {
  return (
    <>
      <div className={statusClassName}>
        {React.cloneElement(Icon as React.ReactElement, {
          size: IconSize,
          className: statusColor,
        })}
        {statusText && (
          <span className={statusTextClassName}>{statusText}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-light-secondary text-lg font-semibold text-center">
          {title}
        </h2>
        <p className="text-light-gray text-sm font-normal text-center">
          {body}
        </p>
      </div>
    </>
  );
};

export default CommonStepCard;
