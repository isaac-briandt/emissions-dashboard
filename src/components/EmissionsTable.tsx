import type { Emission } from "../data/emissions";
import EmissionsRow from "./EmissionsRow";

interface Props {
  emissions: Emission[];
}

const EmissionsTable: React.FC<Props> = ({ emissions }) => {
  return (
    <table width={100} border={1} cellPadding={10} cellSpacing={0}>
      <thead style={{ backgroundColor: "#f2f2f2" }}>
        <tr>
          <th>Sensor ID</th>
          <th>Industry</th>
          <th>Location</th>
          <th>CO2</th>
          <th>NOx</th>
          <th>SO2</th>
          <th>PM2.5</th>
          <th>Timestamp</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {emissions.map((item) => (
          <EmissionsRow key={item.sensorId} data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default EmissionsTable;
