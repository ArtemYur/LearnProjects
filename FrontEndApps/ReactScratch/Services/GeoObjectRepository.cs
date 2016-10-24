using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReactScratch.Entities;

namespace ReactScratch.Services
{
    public class GeoObjectRepository : IGeoObjectRepository
    {
        // there should be DB context as actual data source
        private static List<GeoObject> _repositoy = new List<GeoObject>
        {
            new GeoObject()
            {
                GeoObjectId = 1,
                Name = "World",
                Description = @"The world is a common name for the whole of human civilization, or for the planet Earth and all life upon it. 
                                In terms such as world map and world climate, world is used in the sense detached from human culture or civilization, referring to the planet Earth physically. In a philosophical context the term may refer to the whole of the physical Universe, or an ontological world, described by Martin Heidegger as world disclosure. 
                                In a theological context, world usually refers to the material or the profane sphere, as opposed to the celestial, spiritual, transcendent or sacred. The 'end of the world' refers to scenarios of the final end of human history, often in religious contexts."
            },
            new GeoObject() {
                GeoObjectId = 2,
                Name = "Europe",
                ParentId = 1,
                Description = @"Europe is a continent that comprises the westernmost part of Eurasia. Europe is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, and the Mediterranean Sea to the south. To the east and southeast, Europe is generally considered as separated from Asia by the watershed divides of the Ural and Caucasus Mountains, the Ural River, the Caspian and Black Seas, and the waterways of the Turkish Straits. Yet the non-oceanic borders of Europe—a concept dating back to classical antiquity—are arbitrary. The primarily physiographic term 'continent' as applied to Europe also incorporates cultural and political elements whose discontinuities are not always reflected by the continent's current overland boundaries."
            },
            new GeoObject()
            {
                GeoObjectId = 3,
                Name = "North America",
                ParentId = 1,
                Description = @"North America is a continent entirely within the Northern Hemisphere and almost all within the Western Hemisphere. It can also be considered a northern subcontinent of the Americas. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the west and south by the Pacific Ocean, and to the southeast by South America and the Caribbean Sea. North America covers an area of about 24,709,000 square kilometers (9,540,000 square miles), about 16.5% of the earth's land area and about 4.8% of its total surface. North America is the third largest continent by area, following Asia and Africa, and the fourth by population after Asia, Africa, and Europe."
            },
            new GeoObject()
            {
                GeoObjectId = 4,
                Name = "France",
                ParentId = 2,
                Description = @"France is a transcontinental country comprising territory in western Europe and several overseas regions and territories.[XVI] The European, or metropolitan, area of France extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. Overseas France include French Guiana on the South American continent and several island territories in the Atlantic, Pacific and Indian oceans. France spans 643,801 square kilometres (248,573 sq mi) and has a total population of 66.7 million. It is a unitary semi-presidential republic with the capital in Paris, the country's largest city and main cultural and commercial centre. During the Iron Age, what is now metropolitan France was inhabited by the Gauls, a Celtic people. The area was annexed in 51 BC by Rome, which held Gaul until 486, when the Germanic Franks conquered the region and formed the Kingdom of France."
            },
            new GeoObject()
            {
                GeoObjectId = 5,
                Name = "Germany",
                ParentId = 2,
                Description = @"Germany  is a federal parliamentary republic in central-western Europe. It includes 16 constituent states, covers an area of 357,021 square kilometres (137,847 sq mi), and has a largely temperate seasonal climate. With about 82 million inhabitants, Germany is the most populous member state of the European Union. After the United States, it is the second most popular immigration destination in the world. Germany's capital and largest metropolis is Berlin. Major urban areas include Ruhr, Hamburg, Munich, Cologne, Frankfurt and Stuttgart."
            },
            new GeoObject()
            {
                GeoObjectId = 6,
                Name = "Paris",
                ParentId = 4,
                ImageUrl = "/Content/jpeg/paris.jpg",
                Description = @"Paris is the capital and the most populous city of France. It has an area of 105 square kilometres (41 square miles) and a population in 2013 of 2,229,621 within the city limits. Paris is both a commune and department, and forms the centre and headquarters of the Île-de-France, or Paris Region, which has an area of 12,012 square kilometres (4,638 square miles) and a population in 2014 of 12,005,077, comprising 18.2 percent of the population of France. The agglomeration has grown well beyond Paris' administrative limits. The Paris unité urbaine is a measure of Paris' continuous urban area for statistical purposes, including both the commune and its suburbs, and has a population of 10,601,122 (Jan. 2013 census) which makes it the largest in the European Union. The aire urbaine de Paris, a measure of Paris' metropolitan area, spans most of the Île-de-France region and has a population of 12,405,426 (Jan. 2013 census), constituting one-fifth of the population of France. The Metropole of Grand Paris was created in 2016, combining the city and its nearest suburbs into a single area for economic and environmental cooperation. Grand Paris covers 814 square kilometres (314 square miles) and has a population of 6.945 million persons."
            },
            new GeoObject()
            {
                GeoObjectId = 7,
                Name = "Berlin",
                ParentId = 5,
                ImageUrl = "/Content/jpeg/berlin.jpg",
                Description = @"Berlin is the capital and the largest city of Germany as well as one of its 16 states. With a population of approximately 3.6 million people, Berlin is the second most populous city proper and the seventh most populous urban area in the European Union. Located in northeastern Germany on the banks of Rivers Spree and Havel, it is the centre of the Berlin-Brandenburg Metropolitan Region, which has about 6 million residents from more than 180 nations. Due to its location in the European Plain, Berlin is influenced by a temperate seasonal climate. Around one-third of the city's area is composed of forests, parks, gardens, rivers and lakes."
            },
            new GeoObject()
            {
                GeoObjectId = 8,
                Name = "United States",
                ParentId = 3,
                Description = @"The United States of America (USA), commonly referred to as the United States (U.S.) or America, is a country composed of 50 states, a federal district, five major self-governing territories, and various possessions. The 48 contiguous states and federal district are in central North America between Canada and Mexico, with the state of Alaska in the northwestern part of North America and the state of Hawaii comprising an archipelago in the mid-Pacific. The territories are scattered about the Pacific Ocean and the Caribbean Sea. At 3.8 million square miles (9.8 million km2) and with over 324 million people, the United States is the world's third-largest country by total area (and fourth-largest by land area) and the third-most populous. It is one of the world's most ethnically diverse and multicultural nations, the product of large-scale immigration from many other countries. The country's capital is Washington, D.C. and its largest city is New York City; other major metropolitan areas include Los Angeles, Chicago, Dallas, San Francisco, Boston, Philadelphia, Houston, Atlanta, and Miami. The geography, climate and wildlife of the country are extremely diverse."
            },
            new GeoObject()
            {
                GeoObjectId = 9,
                Name = "Canada",
                ParentId = 3,
                ImageUrl = "/Content/jpeg/canada.jpg",
                Description = @"Canada is a country in the northern half of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the world's second-largest country by total area and the fourth-largest country by land area. Canada's border with the United States is the world's longest land border. The majority of the country has a cold or severely cold winter climate, but southerly areas are warm in summer. Canada is sparsely populated, the majority of its land territory being dominated by forest and tundra and the Rocky Mountains. About four-fifths of the country's population of 36 million people is urbanized and live near the southern border. Its capital is Ottawa, its largest metropolis is Toronto; other major urban areas include Montreal, Vancouver, Calgary, Edmonton, Quebec City, Winnipeg and Hamilton."
            },
            new GeoObject()
            {
                GeoObjectId = 10,
                Name = "New York",
                ParentId = 8,
                Description = @"New York is a state in the Northeastern United States and is the 27th-most extensive, fourth-most populous, and seventh-most densely populated U.S. state. New York is bordered by New Jersey and Pennsylvania to the south and Connecticut, Massachusetts, and Vermont to the east. The state has a maritime border in the Atlantic Ocean with Rhode Island, east of Long Island, as well as an international border with the Canadian provinces of Quebec to the north and Ontario to the west and north. The state of New York, with an estimated 19.8 million residents in 2015, is often referred to as New York State to distinguish it from New York City, the state's most populous city and its economic hub."
            },
            new GeoObject()
            {
                GeoObjectId = 11,
                Name = "Washington",
                ParentId = 8,
                Description = @"Washington Listeni is a state in the Pacific Northwest region of the United States located north of Oregon, west of Idaho, and south of the Canadian province of British Columbia on the coast of the Pacific Ocean. Named after George Washington, the first President of the United States, the state was made out of the western part of the Washington Territory, which had been ceded by Britain in 1846 in accordance with the Oregon Treaty in the settlement of the Oregon Boundary Dispute. It was admitted to the Union as the 42nd state in 1889. Olympia is the state capital. Washington is sometimes referred to as Washington State or the State of Washington to distinguish it from Washington, D.C., the capital of the U.S., which is often shortened to Washington."
            },
            new GeoObject()
            {
                GeoObjectId = 12,
                Name = "New York City",
                ParentId = 10,
                ImageUrl = "/Content/jpeg/newyork.jpg",
                Description = @"The City of New York, often called New York City, New York, or simply The City, is the most populous city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, one of the most populous urban agglomerations in the world. With a U.S. Census Bureau-estimated 2015 population of 8,550,405 distributed over a land area of just 305 square miles (790 km2), New York is also the most densely populated major city in the United States. A global power city, New York City exerts a significant impact upon commerce, finance, media, art, fashion, research, technology, education, and entertainment, its fast pace defining the term New York minute. Home to the headquarters of the United Nations, New York is an important center for international diplomacy and has been described as the cultural and financial capital of the world."
            },
            new GeoObject()
            {
                GeoObjectId = 13,
                Name = "Redmond",
                ParentId = 11,
                ImageUrl = "/Content/jpeg/redmond.jpg",
                Description = @"Redmond is a city in King County, Washington, United States, located 16 miles (26 km) east of Seattle, within the Seattle metropolitan area. The population was 54,144 at the 2010 census, up from 45,256 in 2000 census. Redmond is commonly recognized as the home of Microsoft, Nintendo of America and SpaceX. With an annual bike race on city streets and the state's only velodrome, Redmond is also known as the 'Bicycle Capital of the Northwest'."
            }
        };

        public Task<IQueryable<GeoObject>> Get()
        {
            return Task.Run(() => { return _repositoy.AsQueryable(); });
        }
    }
}
