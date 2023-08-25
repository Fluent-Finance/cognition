// handcoded with ♥︎  by ⚡️ 𝙆𝙊𝘿𝞝𝙋𝞸𝞝𝙏 ⚡️

export const prerender = true;

export const load = async ({ fetch }) => {
  try {
    const response = await fetch('/api');
    return await response.json();
  } catch (error) {
    console.error(`Error in load function for : ${error}`);
  }
};
