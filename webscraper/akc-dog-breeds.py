from lxml import html, etree
import requests
import json

"""
(1) Web scraping for dog breeds from AKC website
(2) Scrapes relevant info and serializes each record in json
(3) Writes each entry to text file 


"""

breed_file_name = "dog-breed-akc-urls.txt"

class Canine:
    """
    class for dog breeds from web scraping
    will be output as json object
    """
    def __init__(self, dogBreed, dogUrl):
      self.dogBreed = dogBreed
      self.dogUrl = dogUrl
      self.dogHeight = " "
      self.dogWeight = " "
      self.dogTemperament = " "
      self.dogPopularity = " "
      self.dogDescription = " "
      self.dogAbout = " "
      self.dogExpectancy = " "
      self.dogGroup = " "
      self.dogImageUrl = " "
    
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

def main():
    canines = []
    with open(breed_file_name) as f:
        for line_of_text in f:
            # print(line_of_text)
            dogUrl = etree.fromstring(line_of_text).xpath('//option/@value')[0]
            dogBreed = etree.fromstring(line_of_text).xpath('string()')
            canine = Canine(dogBreed, dogUrl)

            # get page source from website
            page = requests.get(dogUrl)
            #soup = BeautifulSoup(page.content, 'html.parser')
            tree = html.fromstring(page.content)
            # get parameter names that are available 
            names = tree.xpath('//span[@class="attribute-list__term attribute-list__text "]/text()')
            # get dog breed temperament
            try:
                canine.dogTemperament = tree.xpath('//span[@class="attribute-list__description attribute-list__text attribute-list__text--lg mb4 bpm-mb5 pb0 d-block"]/text()')[0]
            except:
                canine.dogTemperament = " "
            
            # get next parameters
            index = 0
            canine.dogPopularity = " "
            canine.dogHeight = " "
            canine.dogWeight = " "
            canine.dogExpectancy = " "
            values = tree.xpath('//span[@class="attribute-list__description attribute-list__text "]/text()')

            for name in names:
                if(name == 'AKC Breed Popularity:'):
                    canine.dogPopularity = values[index]
                    index += 1
                elif (name == 'Height:'):
                    canine.dogHeight = values[index]
                    index += 1
                elif (name == 'Weight:'):
                    canine.dogWeight = values[index]
                    index += 1
                elif (name == 'Life Expectancy:'):
                    canine.dogExpectancy = values[index]
                    index += 1

            try:
                canine.dogGroup = tree.xpath('//span[@class="attribute-list__description attribute-list__text "]/a/text()')[0]
            except:
                canine.dogGroup = " "

            # get image url
            try:
                canine.dogImageUrl = tree.xpath('//meta[@name="sailthru.image.full"]/@content')[0]
            except:
                canine.dogImageUrl = "-1"
            # get description
            try:
                canine.dogDescription = tree.xpath('//meta[@name="sailthru.description"]/@content')[0]
            except:
                canine.dogDescription = "-1"
            # get about and club
            params = tree.xpath('//div[@class="breed-info__content-wrap"]/p/text()')
            try:
                canine.dogAbout = params[0]
            except:
                canine.dogAbout = "-1"

            # add breed to list
            canines.append(canine)

    # print each entry as json string; also append to file
    with open("akc-dog-breeds.json", "a") as myfile:
        print('[\n')
        for db in canines:
            s = db.toJSON()
            print(s, ",\n")
            myfile.write(s + ",\n")
        print(']')

if __name__ == "__main__":
    main()
    print("Program script complete...")