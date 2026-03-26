import { useEffect, useState } from "react";
import EmissionsTable from "../components/EmissionsTable";
import { fetchEmissions } from "../services/api";
import type { Emission } from "../data/emissions";

const Home = () => {
  const [emissionsData, setEmissionsData] = useState<Emission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadEmissionsData = () => {
    fetchEmissions()
      .then((data) => {
        setEmissionsData(data as []);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadEmissionsData();

    const interval = setInterval(() => {
      loadEmissionsData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>Emissions Monitoring Dashboard</h1>

      {loading && <p>Loading emissions data...</p>}

      {error && <p>Unable to load emissions data.</p>}

      {!loading && !error && <EmissionsTable emissions={emissionsData} />}
    </main>
  );
};

export default Home;
