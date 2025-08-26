import {useState} from 'react'

type AlertProps = {
  alert: { type: string; msg: string } | null;
};

function Alert({ alert }: AlertProps) {
if (!alert) return null;
  return (
    <>

      {alert &&(
       <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
     <strong>{alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}</strong>: {alert.msg}
  
</div>
      )}
</>
  );
}

export default Alert;
