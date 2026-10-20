/* eslint-disable @next/next/no-img-element */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? 'brand-light' : ''}`}>
      <img src={light ? '/rmi-logo-dark.svg' : '/rmi-logo-light.svg'} alt="" width={30} height={36} className="brand-mark-img" />
      <span><b>RMI</b>Agentic</span>
    </span>
  );
}
