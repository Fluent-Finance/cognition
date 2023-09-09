<!-- handcoded with ♥︎  by ⚡️-𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️ -->
<script>
  import { Line } from 'svelte-chartjs';
  import { data } from '$lib/chartData/line';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    Filler,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    Filler,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );
</script>

<Line { data } options={{ responsive: true }} />
