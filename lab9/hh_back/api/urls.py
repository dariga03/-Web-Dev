from django.urls import path

from .views import companies, company_id, vacancies, vacancy_id, company_vacancy, top_ten_vacancies

urlpatterns = [
    path('companies/', companies),
    path('companies/<int:id>/', company_id),
    path('vacancies/', vacancies),
    path('vacancies/<int:id>/', vacancy_id),
    path('companies/<int:id>/vacancies/', company_vacancy),
    path('vacancies/top_ten/', top_ten_vacancies)
]