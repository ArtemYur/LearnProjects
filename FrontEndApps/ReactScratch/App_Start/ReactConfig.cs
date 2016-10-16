using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReactScratch.ReactConfig), "Configure")]

namespace ReactScratch
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration.AddScript("~/Scripts/Home/SearchInput.jsx");
            ReactSiteConfiguration.Configuration.AddScript("~/Scripts/Home/Content.jsx");
            ReactSiteConfiguration.Configuration.AddScript("~/Scripts/Home/Jumbotron.jsx");
        }
	}
}