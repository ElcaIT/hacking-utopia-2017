import pandas as pd
from sklearn import linear_model


class Indicator(object):
	def __init__(self):
		self.__load_data();
		self.__fit();

	def __load_data(self):
		self.df = pd.read_csv('data/KANTON_ZUERICH_361.csv', encoding='ANSI')

	def __fit(self):
		models = {}
		
		areas = self.df.groupby('GEBIET_NAME')
		for gebiet_name, data in areas:
			X = [[year] for year in data['INDIKATOR_JAHR']]
			Y = data['INDIKATOR_VALUE']
			regr = linear_model.LinearRegression()
			regr.fit(X, Y)
			models[gebiet_name] = regr
			
		self.models = models
			
	def predict(self, gebiet_name, year):
		predicted_indicator = self.models[gebiet_name].predict(year)[0]
		return round(predicted_indicator, 1)
