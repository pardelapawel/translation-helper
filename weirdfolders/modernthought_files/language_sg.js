 /*********************************
 *	교과/수강관련
 *********************************/



//교육과정  ../KK/kk01_r030.jsp

var _major = new Array("개설전공","Major");
var _semester = new Array("개설학기","Semester");
var _hakyoun = new Array("학년","Year");
var _jong = new Array("종별","Classification");
var _sort = new Array("정렬순서","Sort");
var _sortmajor = new Array("개설전공순","By Major");
var _sortcoursecode = new Array("학정번호순","By Course Code");
var _sortcoursetitle = new Array("교과목명순","By Course Title");
var _searchall = new Array("전체검색","Search All");
var _newhakno = new Array("통합학정번호","New Course Code");
var _samekk = new Array("동&nbsp;일&nbsp;교&nbsp;과&nbsp;목&nbsp;안&nbsp;내","동&nbsp;일&nbsp;교&nbsp;과&nbsp;목&nbsp;안&nbsp;내");
var _hakno = new Array("학정번호","Course Code");
var _prof = new Array("담당교수","Instructor");
var _kna = new Array("교과목명","Course Title");
var _engkk = new Array("영어강의","Course in English");

var _ekna = new Array("영문교과목명","English Course Title");
var _diskna = new Array("교과목 개요 조회","Course Description");
var _diskna1 = new Array("교과목 개요","Course Description");
var _tot = new Array("총","Total");
var _hakjum = new Array("학점","Credit");
var _lecture = new Array("강의","Lecture");
var _lab = new Array("실습","Lab");
var _weight = new Array("단위","Group");

var _allhakyoun = new Array("전학년","All");
var _freshman = new Array("1학년","1");
var _sophomore = new Array("2학년","2");
var _junior = new Array("3학년","3");
var _senior = new Array("4학년","4");
var _cyear = new Array("개설년도","Period Offered");


//수강편람 ../KK/kk04_r010.jsp
var _cmajor = new Array("관련전공","Related Department");
var _catagory = new Array("수강편람","Course Catalogue");
var _einterview = new Array("면담유무","Interview Requirement");
var _time = new Array("강의시간","Time");
var _syllabus = new Array("수업계획서 조회","Syllabus");
// 국문편람은 영문교과목명 조회, 영문편람은 Korean Course Title
var _disekna = new Array("영문교과목명 조회","Korean Course Title");
var _semester1 = new Array("학기","Semester");
var _profsosok = new Array("담당교수소속","Department");
var _ban = new Array("반","Sec.");
var _jong1 = new Array("종별","Category");
var _tothakno = new Array("학정번호-분반","Course Code-Sec.");
var _tothakno1 = new Array("학정번호-분반-실습","Course Code-Sec.-Lab");
var _target = new Array("수강대상","Target Students");
var _interview = new Array("e-mail 및 면담시간", "e-mail & Office Hour");
var _room = new Array("강의실","Location");
var _refer = new Array("유의사항","Ref.");

var _msg_top1 = new Array("* 수강신청 및 변경기간중에는 시스템 부하를 줄이기 위하여 2개년도 수강편람만 제공됩니다.","* To avoid system overload, the course catalogue and syllabus for only 2 previous academic years will be available during the registration and add & drop period.");
var _msg_top2 = new Array("* 학부 수강신청 제도소개 (click)","* 학부 수강신청 제도소개 (click)");

var _msg1 = new Array("학부생 수강신청 유의사항 (click)","Click on this item before beginning the course enrollment");
var _msg100 = new Array("(신촌)2020학년도 1학기 수강편람 PDF 파일 다운받기","(Sinchon)2020-1 Course Catalogue and Syllabus PDF File Down");
var _msg2 = new Array("현재 작업중입니다.","현재작업중입니다.");
//var _msg2 = new Array("교과 이수 및 수강신청과 관련한 중요한 안내사항입니다. 반드시 확인하시기 바랍니다.","Please read the provided information carefully");
//var _msg2 = new Array("2014-2학기 학부 수강편람은 현재 조회만 가능. 2014-2 PDF파일은 차후 업로드 예정.","2014-2학기 학부 수강편람은 현재 조회만 가능. 2014-2 PDF파일은 차후 업로드 예정.");
var _msg3 = new Array("(신촌)학부 2003-1학기 이전 수강편람 조회 (click)","(Sinchon)Browse course catalogues prior to Spring 2003.");
var _msg4 = new Array("(신촌)학부 연계전공 소개 (click)","(Sinchon)Undergraduate joint majors");
var _msg5 = new Array("강의시간표의 내용이 변경된 경우는 청색 으로 표시되어 있으니 유념하시기 바랍니다.","Pay attention to the contents highlighted in blue indicating  the changes in time, location, or instructor.");
var _msg38 = new Array("(학부) 계절제 수업 과목에 대한 검색은 개설전공을 학부>계절학기>여름학기/겨울학기로 선택하여 주시기 바랍니다.",
											 "(Undergraduate) For the search for summer or winter classes, please select the [Undergraduate Programs > Supplementary Term> Summer/Winter session].");
var _msg35 = new Array("(신촌)대학원 강의동 및 시간표 시간 안내 (click)","(Sinchon)Click on this item for location and time of graduate courses.");
var _msg36 = new Array("(신촌)수업계획서 담당교수 연락처 확인", "(신촌)수업계획서 담당교수 연락처 확인");
var _msg37 = new Array("(신촌)연세포탈시스템에 보이는 종별은 학생 졸업 시 인정되는 실제 종별과 다를 수 있음.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;반드시 교무처 학사지원팀 및 소속학과와 졸업인정학점 관련 확인.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(예: 공과대학 복수전공생이 아님에도 불구하고, 문과대학 학생이 공과대학 개설 전공선택과목을 수강할 경우, 해당과목은 일반선택과목으로 인정)", "(Sinchon)Classification of a course may apply differently to each student. Check with Academic Support Team regarding your graduation requirements.");
var _msg01 = new Array("계열기초과목 폐강에 따른 대체 지정 교과목 안내 및 2010학년도 교육제도개편에 따른 교양영역 재수강 지정 현황표(첨부)","Designated Alternative Courses due to Cancellation of General Area Basic(~09) & Designated Liberal Arts Courses for Retaking Students due to the 2010 Revision of the Education System (attached)");
var _msgtmp1 = new Array("강사법 시행 등에 따라 2019학년도 2학기 개설되는 일부 과목 및 강의시간, 담당교수 정보 등이 변경될수 있으므로, 수강신청일 이전에 반드시 수업정보를 재확인하여야 합니다.");

//var _wonju1 = new Array("(미래)학사통합에 따른 주요 변경사항(필독)","(mirae)학사통합에 따른 주요 변경사항(필독)");
//var _wonju2 = new Array("(미래)2011-2 수강신청안내","(mirae)2011-2 수강신청안내");
//var _wonju3 = new Array("(미래)수강신청 시스템 사용안내","(mirae)수강신청 시스템 사용안내");
//var _wonju4 = new Array("(미래)교양영어Ⅱ, 초급, 고급대학영어 원어민 강의시간 안내 ","(mirae)교양영어Ⅱ, 초급, 고급대학영어 원어민 강의시간 안내 ");
//var _wonju5 = new Array("(미래)일반물리, 일반화학, 일반생물학및실험 실험시간 수업장소","(mirae)일반물리, 일반화학, 일반생물학및실험 실험시간 수업장소");

var _wonju1 = new Array("(미래) 20-1학기 수강신청 안내(대학별 수강신청 지침 포함)","(Mirae Campus) 20-1학기 수강신청 안내(대학별 수강신청 지침 포함)");
//var _wonju1 = new Array("(미래)2019-2학기 수강신청 안내","(Mirae Campus)Course Enrollment Guide for 2019 Fall Semester");
var _wonju2 = new Array("수강신청 시스템 사용안내(매뉴얼)","Course Registration System(Manual)");
//var _wonju2 = new Array("(미래)수강신청 시스템 사용안내(매뉴얼)","(Mirae Campus)Course Registration System(Manual)");
//var _wonju3 = new Array("(미래)교양영어Ⅰ, 교양영어Ⅲ , 기초, 중급대학영어 원어민 강의시간","(Mirae Campus)Class Period of native-speaking instructors for ENGLISH 1, ENGLISH 3, BASIC UNIVERSITY ENGLISH, INTERMEDIATE UNIVERSITY ENGLISH (Liberal Arts)");
//var _wonju3 = new Array("(미래)교양영어Ⅱ, 교양영어Ⅳ , 초급, 고급대학영어 원어민 강의시간","(Mirae Campus)Class Period of native-speaking instructors for ENGLISH 2, ENGLISH 4, ELEMENTARY UNIVERSITY ENGLISH, ADVANCED UNIVERSITY ENGLISH (Liberal Arts)");
//var _wonju3 = new Array("(미래)교양영어 Ⅳ, 초급, 고급대학영어 원어민 강의 시간","(Mirae Campus)Class Period of native-speaking instructors for ENGLISH 4, ELEMENTARY UNIVERSITY ENGLISH, ADVANCED COLLEGE ENGLISH");
//var _wonju3 = new Array("(미래)교양영어Ⅲ, 기초,중급대학영어 원어민 강의 시간","(Mirae Campus)Class Period of native-speaking instructors for ENGLISH 3, BASIC UNIVERSITY ENGLISH, INTERMEDIATE UNIVERSITY ENGLISH");
var _wonju3 = new Array("(미래)교양영어(Ⅰ,Ⅱ,Ⅲ,Ⅳ) 이수 안내(이수면제 제도 포함)","(Mirae Campus)교양영어(Ⅰ,Ⅱ,Ⅲ,Ⅳ) 이수 안내(이수면제 제도 포함)");
var _wonju4 = new Array("(미래)일반물리,일반화학,일반생물학및실험 첫 수업시간 실험장소 안내","(Mirae Campus)Classrooms for GENERAL PHYSICS&LABORATORY, GENERAL CHEMISTRY& LABORATORY, GENERAL BIOLOGY&LABORATORY");
var _wonju5 = new Array("(미래)2019-2학기 대학별 수강신청 지침","(Mirae Campus)Course Guideline for 2019 Fall Semester for Each Department");
var _wonju6 = new Array("(미래)2017-2학기 1학년 수강신청 안내 및 학부별 졸업요건(2017학번)","(Mirae Campus)Registration Guideline and Graduation Requirements for the students admitted in 2017");
var _wonju6_1 = new Array("(미래)2020-1학기 1학년(2020학번) 수강신청 안내","(Mirae Campus)Registration Guideline for the students admitted in 2020");
//var _wonju6_1 = new Array("(미래)2019-2학기 1학년(2019학번) 수강신청 안내","(Mirae Campus)Registration Guideline for the students admitted in 2019");
var _wonju6_2 = new Array("(미래)학번별 졸업요건 안내","(Mirae Campus)Graduation Requirements for the students");

//var _wonju7 = new Array("(미래)교양영어 주요 개편 사항","(Mirae Campus)Major Changes to ENGLISH(Liberal Arts) Courses ");
var _wonju7 = new Array("(미래)연구활동 종사자 법정 안전교육 이수 안내","(Mirae Campus)연구활동 종사자 법정 안전교육 이수 안내 ");
var _wonju8 = new Array("(미래)캡스톤디자인 교과목 수강안내","(Mirae Campus)Capstone Design Guide");
var _wonju9 = new Array("(미래)창업교육 교과목 전공학점 인정 안내","(Mirae Campus)산학협력(창업교육)전공학점 인정 안내");
var _wonju10 = new Array("수강신청시스템 이용 시 타인의 아이디를 도용하거나, 매크로 사용 등 비정상적으로 수강신청할 경우 처벌을 받습니다.","수강신청시스템 이용 시 타인의 아이디를 도용하거나, 매크로 사용 등 비정상적으로 수강신청할 경우 처벌을 받습니다.");
var _wonju11 = new Array("미래캠퍼스 수강신청 도우미 네이버카페(안내 및 문의)","미래캠퍼스 수강신청 도우미 네이버카페(안내 및 문의)");

var _campusmap = new Array("캠퍼스맵", "Campus Map");
var _campusmap_s = new Array("신촌캠퍼스", "Sinchon Campus");
var _campusmap_i = new Array("국제캠퍼스", "International Campus");
var _campusmap_w = new Array("미래캠퍼스", "Mirae Campus");

var _msg_e1 = new Array("* 정규학기 운영방식 변경에 따른 주요 안내사항<br/>중간시험기간(2019.10.21. - 10.25.) 및 기말시험기간(2019.12.9. - 12.20.)을 고려하여 시험이 이루어지지 않는 주에는 수업 또는 자율학습을 진행하여야 함.", 
"* Notice for changes in semester based Regular Exchange/Visiting Program <br/>During midterm and final exam period, students who do not have exams should do self-studying or take lectures.");
var _msg_e2 = new Array("* 2014학년도 1학기부터는 15~16주차가 자율학습 및 기말고사 기간으로 변경됩니다. ",
"* Starting from the first semester of 2014, Week 15-16 has been changed to self-studying/final exam period.");
var _msg_e3 = new Array("* 연세대학교 학칙 제57조의 2에 의거하여, 장애학생은 학기 시작 전후에 교과목 담당교수와의 면담을 통해 출석, 강의, 과제 및 시험에 관한 교수학습지원 사항을 요청할 수 있으며, 요청한 사항에 대해 담당교수 또는 장애학생지원실을 통해 지원받을 수 있습니다. 강의, 과제 및 시험 응시 시, 가능한 장애유형별 지원의 예는 아래와 같습니다.<br/>(단, 실제 지원 내용은 강의 특성에 따라 달라질 수 있습니다.)<br/>[강의]<br/>- 시각장애: 교재제작(디지털, 점자, 확대교재 등), 대필도우미 허용<br/>- 지체장애: 교재제작(디지털교재), 대필 및 수업보조 도우미 허용, 지정좌석 배정<br/>- 청각장애: 대필/문자통역 도우미 허용, 강의 녹취 허용<br/>- 지적장애/자폐성장애: 대필도우미 및 수업 멘토 허용<br/>[과제 및 시험]<br/>- 시각장애/지체장애/청각장애: 과제 제출기한 연장, 과제 및 제출방식 조정, 시험시간 연장, 시험문항 및 응답 방식 조정, 별도 장소 제공, 대필도우미 연계 등<br/>- 지적장애/자폐성장애: 개별화 과제 제출 및 대체 평가 실시 검토 ",
"* According to the University regulation section 57-2, students with disabilities can request special support related to attendance, lectures, assignments, or exams by contacting the course professor at the beginning of semester.Upon request, students can receive such support from the course professor or from the Office for Students with Disabilities(OSD). The following are examples of types of support available in the lectures, assignments, and exams:<br/>(However, actual support may vary depending on the course.)<br/>[Lecture]<br/>- Visual Impairment: alternative, braille, enlarged reading materials, note-taker<br/>- Physical Impairment: alternative reading materials, access to classroom, note-taker, assigned seat<br/>- Hearing Impairment: note-taker/stenographer, recording lecture<br/>- Intellectual Disability/Autism: note-taker, study mentor<br/>[Assignments and Exam]<br/>- Visual, Physical, Hearing Impairment: extra days for submission, alternative type of assignment, extended exam time, alternative type of exam, arranging separate exam room, and proctors, note-taker<br/>- Intellectual Disability/Autism: personalized assignments, alternative type of evaluation");



//수강신청내역 ../SG/sg13_r021.jsp
var _hakbun = new Array("학번","Student ID No.");
var _name = new Array("성명","Name");
var _jaehak = new Array("재학구분","Enrollment Status");
var _sosok = new Array("소속","Department");
var _degree = new Array("과정","Degree");
var _jinhak = new Array("진학구분","Advancement Status");
var _sex = new Array("성별","Sex");
var _byunymd = new Array("학적변동일","Date of Status Change");
var _maxstudy = new Array("최대수강학점","Maximum Credit");
var _withdraw = new Array("철회","Withdrawal");
var _hakgi = new Array("학기","Semester");
var _bb = new Array("분반","Sec.");
var _sbb = new Array("실습","Lab");
var _schakjum = new Array("신청학점","Current Semester Credits");
var _chplseat = new Array("채플좌석","Chapel Seat No.");

//개인시간표	../sg/sg13_r090.jsp
var _ktime = new Array("교시","Time");
var _mon = new Array("월","Mon");
var _tue = new Array("화","Tue");
var _wed = new Array("수","Wed");
var _thu = new Array("목","Thu");
var _fri = new Array("금","Fri");
var _sat = new Array("토","Sat");
var _sun = new Array("일","Sun");

//과제물조회	../kk/kk05_i020.jsp
var _sugangkna = new Array("수강교과목","Course Title");
var _seq = new Array("번호","Seq");
var _assignment = new Array("과제명","Assignments");
var _file = new Array("파일","File");
var _hit = new Array("조회","Page View");
var _regdate = new Array("등록일","Registered Date");
var _uptdate = new Array("수정일","Date of Change");
var _msg6 = new Array("등록된 과제물이 없습니다.","Registered assignments not found");
var _msg7 = new Array("수강 교과목을 선택해주십시오.","Select the Course");
var _assdisplay = new Array("과제물 조회","Course Assignments");
var _content = new Array("과제내용","Contents");

//동일과목조회 ../sg/sg13_r111.jsp
var _iden  = new Array("동일교과목 조회","Identical Courses");
var _msg8 = new Array("동일교과목(재수강과목)안내","Identical Courses with Changed Title, Code or Credit");
var _before = new Array("개정 전","Before");
var _after = new Array("개정 후","After");

//수업계획서 조회 ../kk/kk04_r010pop2.jsp
var _referdata = new Array("참고자료","Reference Data");
var _office = new Array("연구실","Office");
var _telephone = new Array("연락처","Telephone");
var _msg9 = new Array("e-mail 및 면담시간","e-mail & Office Hour");
var _goal = new Array("수업목표 및 개요","Course Description & Goals");
var _prerequisite = new Array("선수과목(선수학습)","Prerequisite");
var _gangwoon = new Array("강좌운영방식","Course Requirements");
var _grademethod = new Array("성적평가방법","Grading Policy");
var _texts = new Array("교재 및 참고문헌","Texts & References");
var _profinf = new Array("교수정보","Instructor's Profile");
var _ta = new Array("조교정보","TA's Name & Contact Information");
var _eng_content_2 = new Array("영문<br>수업계획내용<br>Syllabus in English","Syllabus in English");
var _eng_content = new Array("영문 수업계획내용<br>Syllabus in English","Syllabus in English");
var _eng_content_memo = new Array("* 수업목표 및 개요, 성적평가방법등을 영문으로 작성하여 주시기 바랍니다.","");
var _week = new Array("주","Week");
var _period = new Array("기간","Period");
var _sycontent = new Array("수업내용","Weekly Topic & Contents");
var _msg10 = new Array("교재범위,과제물","Course Material Range & Assignments");
var _remark = new Array("비고","Reference");
var _contribution = new Array("기여도","Contribution");
var _achievement = new Array("학습 성과","Achievement");
var _msg11 = new Array("학습성과 달성을 위한 교과 내용","Course of study for the purpose of achievement and learning");
var _msg12 = new Array("ABEEK  프로그램 학습성과 달성을 위한 본 과목의 기여도","Evaluation of the course based on its effectiveness in helping you reach your achievement goals for ABEEK.");
var _msg13 = new Array("크게 기여함","High");
var _msg14 = new Array("보통 기여함","Regular");
var _msg15 = new Array("기여도가 낮음","Low");
var _msg16 = new Array("기여하지 않음","None");
var _nodown_msg = new Array("학사관리 > 로그인 > 수업 > 편람 > 수강편람 > 수업계획서 조회 화면에서 다운 가능합니다.","Download available at Academic Management System > Login > Course > Catalogue > Course Catalogue > Syllabus.");


//개인강의시간표 ../kk/kk06_r013.jsp
var _msg17 = new Array("특수대학원 교과목의 1교시는 각 기관별로 정해진 시작시간(예: 오후 7시)이 다르므로, 실제와 틀리게 표시될 수 있습니다.","Special graduate schools set their own starting times for their first classes and the system may not reflect these differences.");


//수업계획서 등록 ../kk06_r022.jsp
var _schangedate = new Array("최초등록일","Created Date");
var _changedate = new Array("최종수정일","Last-Modified");
var _browse = new Array("조회","Browse");
var _save = new Array("저장","Save");
var _remark1 = new Array("학사일정","Academic Schedule");
var _msg17 = new Array("ABBEK 관련 수업계획 작성","Syllabi for ABBEK accreditation");
var _msg18 = new Array("학년도 학기를 선택해주십시오","Select the year and semester.");
var _msg33 = new Array("수업계획서 이전 자료 가져오기","Get previous data");
var _msg34 = new Array("기타 과목 조회","Browse the others.");


//수업계획서 출력 ../kk06_r024.jsp

//과제물 등록	../kk06_r022.jsp
var _msg19 = new Array("업로드할 파일 이름에는 특수문자를 사용할 수 없습니다.","Avoid special characters in the file names to attach.");
var _msg20 = new Array("강의교과목에 같은 과목이 두번 조회되는 경우에는 두 곳 모두에 같은 내용으로 과제물을 등록하셔야 합니다.","If your course is co-listed in more than two institutions, upload the file to each institution.");
var _kakna = new Array("강의교과목","Course");
var _delete = new Array("삭제","Delete");
var _modify = new Array("수정","Modify");
var _add = new Array("추가","Add");
var _msg21 = new Array("과제물 등록","Register Assignments");
var _attach = new Array("파일첨부","Attach File");
var _msg22 = new Array("파일크기는 10 Mbyte이하","The file size to attach should be 10 Mbyte or smaller.");
var _msg23 = new Array("이전 페이지로","Previous Page");

//수강자료 생성 ./kk06_r032.jsp
var _msg24 = new Array("EXCEL 파일로 받고자 하는 과목을 선택하신 후 파일다운 버튼을 클릭하세요.","To send the  roster in MS Excel file, select the course and click on the download button.");
var _msg25 = new Array("생성될 파일이 지나치게 큰 경우 파일생성이 되지 않을수 있습니다.","If the data is too big, the file may not be created.");
var _msg26 = new Array("생성파일 저장시 원하는 파일명을 입력할때 반드시 확장자명을 .xls로 입력하시기 바랍니다. 확장자명을 .xls로 주게되면 EXCEL에서 파일을 바로 읽어올 수 있습니다.","To open the file from MS Excel application, identify the file extension as xls when you save the file.");
var _msg27 = new Array("<b><font color=blue>다운로드가 안될 경우</font> 익스플로어 메뉴의 <font color=blue>[도구] - [인터넷옵션] - [보안]</font>에서 <font color=blue>[인터넷]</font>을 선택하신 후 아래의 <font color=blue>[사용자 지정 수준] - [다운로드] - [파일 다운로드에 대해 자동 확인]</font> 옵션을 <font color=blue>[사용]</font>으로 선택하신 후 재시도하시기 바랍니다.</font></b>","If you fail at downloading the files, change your browser setting as follows and try again. Choose 〔Option〕- 〔Internet Option〕- 〔Security〕menu, and then click〔Selecting Custom Level Settings〕button and set the 〔File Download〕option box to [Enable]");


//수업계획서 참고자료 등록 ./kk06_r027.jsp
var _msg28 = new Array("파일은 수업계획서의 참고용 자료로만 사용되며 수업계획서를 대체할 수는 없습니다.","File is used only for references on the syllabus and cannot be substituted for a syllabus.");
var _msg29 = new Array("업로드된 파일은 수강편람의 수업계획서 조회시 누구나 다운받을 수 있게 됩니다.","Uploaded file can be accessed by anyone while searching the syllabus.");
var _msg30 = new Array("업로드할 파일 이름에는 특수문자를 사용할 수 없으며 파일은 가급적 3개 이하로 올려주시기 바랍니다.","Uploaded file name should not contain any special characters and uploading is limited to 3 files.");
var _msg31 = new Array("수업계획서<br>참고 자료 등록","Register for Additional References on the Syllabus");
var _msg32 = new Array("파일크기는 10 Mbyte이하만 가능합니다.","Attached file size cannot exceed 10 Mbytes.");

var _nodata = new Array("검색된 자료가 없습니다.","No matched data found.");
var _rpcnt = new Array("C- 이상 재수강 횟수","Count of Repeated Course(A,B,C)");


//수강철회 ../sg13_u010.jsp
var _wreason = new Array("철회사유","Reason");
var _wapply = new Array("신청","Apply");
var _appliedkna = new Array("수강철회 과목","Courses applied for withdrawal");
var _applykna = new Array("수강철회 신청","Apply for withdrawal");
var _print = new Array("인쇄","Print");
var _cancel = new Array("취소","Cancel");
var _speriod = new Array("서비스기간","Service Periods");
var _ttime = new Array("당일 서비스시간","Services Available");
var _gcontent = new Array("공지내용","Contents");
var _notice = new Array("공지사항","Notices");

// 대학원수강철회 ../sg13_g_u010.jsp
var _sprof = new Array("주임교수","Professor");
var _g_appdate = new Array("수강철회 신청기록","Time applied for withdrawal");
var _g_admdate = new Array("담당교수 승인/거부 기록 ","Time approved for withdrawal by instructor");
var _g_admdate1 = new Array("담당교수 승인기록 ","Time approved for withdrawal by instructor");
var _g_sadmdate = new Array("주임교수 승인/거부 기록","Time approved for withdrawal by professor");
var _g_appliedkna = new Array("수강철회 신청 명단","Courses applied for withdrawal");
var _g_approvedkna = new Array("수강철회 승인/거부 현황","Courses approved for withdrawal");
var _g_wapprove = new Array("승인","Apply");
var _g_wdeny = new Array("거부(거부사유입력)","Deny");
var _g_capprove = new Array("취소","Cancel");
var _g_wreason = new Array("수강철회사유","Reason");

var _g1 = new Array(": 대학원교과목(학부학점인정)",": Graduate Course Taken (Approved for Undergraduate credit)");
var _g2 = new Array(": 대학원교과목(대학원학점인정) ",": Graduate Course Taken (Approved for graduate credit)");


// 마일리지 수강신청
var _mileage_title = new Array("※ 마일리지 수강신청결과", "※ Mileage Results");
var _mileage_hyhg = new Array("학년도 학기", "Yaer and semester");


/*********************************
 *	display function 
 *********************************/
 var lang
 function landisplay(){
	 document.write(arguments[0][lang]);
 }
 function alertmsg(){
	 alert(arguments[0][lang]);
 }
