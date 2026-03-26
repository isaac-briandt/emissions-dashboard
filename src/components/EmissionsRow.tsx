import type { Emission } from "../data/emissions";

interface Props {
  data: Emission;
}

const LIMITS = {
  co2: 450,
  nox: 80,
  so2: 20,
  pm25: 35,
};

const EmissionsRow: React.FC<Props> = ({ data }) => {
  const isAlert =
    data.co2 > LIMITS.co2 ||
    data.nox > LIMITS.nox ||
    data.so2 > LIMITS.so2 ||
    data.pm25 > LIMITS.pm25;

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatIndustry = (industry: string): string => {
    const parts = industry.split(" ");
    return parts.slice(1).join(" ");
  };

  return (
    <tr style={{ backgroundColor: isAlert ? "#ffe5e5" : "transparent" }}>
      <td>{data.sensorId || "-"}</td>
      <td>{formatIndustry(data.industry) || "-"}</td>
      <td>{data.location || "-"}</td>
      <td>{data.co2 || "-"}</td>
      <td>{data.nox || "-"}</td>
      <td>{data.so2 || "-"}</td>
      <td>{data.pm25 || "-"}</td>
      <td>{formatDate(data.timestamp)}</td>
      <td>{isAlert ? "ALERT" : "Normal"}</td>
    </tr>
  );
};

export default EmissionsRow;
