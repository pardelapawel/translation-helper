 /*********************************
 *	����/��������
 *********************************/



//��������  ../KK/kk01_r030.jsp

var _major = new Array("��������","Major");
var _semester = new Array("�����б�","Semester");
var _hakyoun = new Array("�г�","Year");
var _jong = new Array("����","Classification");
var _sort = new Array("���ļ���","Sort");
var _sortmajor = new Array("����������","By Major");
var _sortcoursecode = new Array("������ȣ��","By Course Code");
var _sortcoursetitle = new Array("��������","By Course Title");
var _searchall = new Array("��ü�˻�","Search All");
var _newhakno = new Array("����������ȣ","New Course Code");
var _samekk = new Array("��&nbsp;��&nbsp;��&nbsp;��&nbsp;��&nbsp;��&nbsp;��","��&nbsp;��&nbsp;��&nbsp;��&nbsp;��&nbsp;��&nbsp;��");
var _hakno = new Array("������ȣ","Course Code");
var _prof = new Array("��米��","Instructor");
var _kna = new Array("�������","Course Title");
var _engkk = new Array("�����","Course in English");

var _ekna = new Array("�����������","English Course Title");
var _diskna = new Array("������ ���� ��ȸ","Course Description");
var _diskna1 = new Array("������ ����","Course Description");
var _tot = new Array("��","Total");
var _hakjum = new Array("����","Credit");
var _lecture = new Array("����","Lecture");
var _lab = new Array("�ǽ�","Lab");
var _weight = new Array("����","Group");

var _allhakyoun = new Array("���г�","All");
var _freshman = new Array("1�г�","1");
var _sophomore = new Array("2�г�","2");
var _junior = new Array("3�г�","3");
var _senior = new Array("4�г�","4");
var _cyear = new Array("�����⵵","Period Offered");


//������� ../KK/kk04_r010.jsp
var _cmajor = new Array("��������","Related Department");
var _catagory = new Array("�������","Course Catalogue");
var _einterview = new Array("�������","Interview Requirement");
var _time = new Array("���ǽð�","Time");
var _syllabus = new Array("������ȹ�� ��ȸ","Syllabus");
// ��������� ����������� ��ȸ, ��������� Korean Course Title
var _disekna = new Array("����������� ��ȸ","Korean Course Title");
var _semester1 = new Array("�б�","Semester");
var _profsosok = new Array("��米���Ҽ�","Department");
var _ban = new Array("��","Sec.");
var _jong1 = new Array("����","Category");
var _tothakno = new Array("������ȣ-�й�","Course Code-Sec.");
var _tothakno1 = new Array("������ȣ-�й�-�ǽ�","Course Code-Sec.-Lab");
var _target = new Array("�������","Target Students");
var _interview = new Array("e-mail �� ���ð�", "e-mail & Office Hour");
var _room = new Array("���ǽ�","Location");
var _refer = new Array("���ǻ���","Ref.");

var _msg_top1 = new Array("* ������û �� ����Ⱓ�߿��� �ý��� ���ϸ� ���̱� ���Ͽ� 2���⵵ ��������� �����˴ϴ�.","* To avoid system overload, the course catalogue and syllabus for only 2 previous academic years will be available during the registration and add & drop period.");
var _msg_top2 = new Array("* �к� ������û �����Ұ� (click)","* �к� ������û �����Ұ� (click)");

var _msg1 = new Array("�кλ� ������û ���ǻ��� (click)","Click on this item before beginning the course enrollment");
var _msg100 = new Array("(����)2020�г⵵ 1�б� ������� PDF ���� �ٿ�ޱ�","(Sinchon)2020-1 Course Catalogue and Syllabus PDF File Down");
var _msg2 = new Array("���� �۾����Դϴ�.","�����۾����Դϴ�.");
//var _msg2 = new Array("���� �̼� �� ������û�� ������ �߿��� �ȳ������Դϴ�. �ݵ�� Ȯ���Ͻñ� �ٶ��ϴ�.","Please read the provided information carefully");
//var _msg2 = new Array("2014-2�б� �к� ��������� ���� ��ȸ�� ����. 2014-2 PDF������ ���� ���ε� ����.","2014-2�б� �к� ��������� ���� ��ȸ�� ����. 2014-2 PDF������ ���� ���ε� ����.");
var _msg3 = new Array("(����)�к� 2003-1�б� ���� ������� ��ȸ (click)","(Sinchon)Browse course catalogues prior to Spring 2003.");
var _msg4 = new Array("(����)�к� �������� �Ұ� (click)","(Sinchon)Undergraduate joint majors");
var _msg5 = new Array("���ǽð�ǥ�� ������ ����� ���� û�� ���� ǥ�õǾ� ������ �����Ͻñ� �ٶ��ϴ�.","Pay attention to the contents highlighted in blue indicating  the changes in time, location, or instructor.");
var _msg38 = new Array("(�к�) ������ ���� ���� ���� �˻��� ���������� �к�>�����б�>�����б�/�ܿ��б�� �����Ͽ� �ֽñ� �ٶ��ϴ�.",
											 "(Undergraduate) For the search for summer or winter classes, please select the [Undergraduate Programs > Supplementary Term> Summer/Winter session].");
var _msg35 = new Array("(����)���п� ���ǵ� �� �ð�ǥ �ð� �ȳ� (click)","(Sinchon)Click on this item for location and time of graduate courses.");
var _msg36 = new Array("(����)������ȹ�� ��米�� ����ó Ȯ��", "(����)������ȹ�� ��米�� ����ó Ȯ��");
var _msg37 = new Array("(����)������Ż�ý��ۿ� ���̴� ������ �л� ���� �� �����Ǵ� ���� ������ �ٸ� �� ����.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�ݵ�� ����ó �л������� �� �Ҽ��а��� ������������ ���� Ȯ��.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(��: �������� ������������ �ƴԿ��� �ұ��ϰ�, �������� �л��� �������� ���� �������ð����� ������ ���, �ش������ �Ϲݼ��ð������� ����)", "(Sinchon)Classification of a course may apply differently to each student. Check with Academic Support Team regarding your graduation requirements.");
var _msg01 = new Array("�迭���ʰ��� �󰭿� ���� ��ü ���� ������ �ȳ� �� 2010�г⵵ ������������ ���� ���翵�� ����� ���� ��Ȳǥ(÷��)","Designated Alternative Courses due to Cancellation of General Area Basic(~09) & Designated Liberal Arts Courses for Retaking Students due to the 2010 Revision of the Education System (attached)");
var _msgtmp1 = new Array("����� ���� � ���� 2019�г⵵ 2�б� �����Ǵ� �Ϻ� ���� �� ���ǽð�, ��米�� ���� ���� ����ɼ� �����Ƿ�, ������û�� ������ �ݵ�� ���������� ��Ȯ���Ͽ��� �մϴ�.");

//var _wonju1 = new Array("(�̷�)�л����տ� ���� �ֿ� �������(�ʵ�)","(mirae)�л����տ� ���� �ֿ� �������(�ʵ�)");
//var _wonju2 = new Array("(�̷�)2011-2 ������û�ȳ�","(mirae)2011-2 ������û�ȳ�");
//var _wonju3 = new Array("(�̷�)������û �ý��� ���ȳ�","(mirae)������û �ý��� ���ȳ�");
//var _wonju4 = new Array("(�̷�)���翵�, �ʱ�, ��޴��п��� ����� ���ǽð� �ȳ� ","(mirae)���翵�, �ʱ�, ��޴��п��� ����� ���ǽð� �ȳ� ");
//var _wonju5 = new Array("(�̷�)�Ϲݹ���, �Ϲ�ȭ��, �Ϲݻ����й׽��� ����ð� �������","(mirae)�Ϲݹ���, �Ϲ�ȭ��, �Ϲݻ����й׽��� ����ð� �������");

var _wonju1 = new Array("(�̷�) 20-1�б� ������û �ȳ�(���к� ������û ��ħ ����)","(Mirae Campus) 20-1�б� ������û �ȳ�(���к� ������û ��ħ ����)");
//var _wonju1 = new Array("(�̷�)2019-2�б� ������û �ȳ�","(Mirae Campus)Course Enrollment Guide for 2019 Fall Semester");
var _wonju2 = new Array("������û �ý��� ���ȳ�(�Ŵ���)","Course Registration System(Manual)");
//var _wonju2 = new Array("(�̷�)������û �ý��� ���ȳ�(�Ŵ���)","(Mirae Campus)Course Registration System(Manual)");
//var _wonju3 = new Array("(�̷�)���翵�, ���翵� , ����, �߱޴��п��� ����� ���ǽð�","(Mirae Campus)Class Period of native-speaking instructors for ENGLISH 1, ENGLISH 3, BASIC UNIVERSITY ENGLISH, INTERMEDIATE UNIVERSITY ENGLISH (Liberal Arts)");
//var _wonju3 = new Array("(�̷�)���翵�, ���翵� , �ʱ�, ��޴��п��� ����� ���ǽð�","(Mirae Campus)Class Period of native-speaking instructors for ENGLISH 2, ENGLISH 4, ELEMENTARY UNIVERSITY ENGLISH, ADVANCED UNIVERSITY ENGLISH (Liberal Arts)");
//var _wonju3 = new Array("(�̷�)���翵�� ��, �ʱ�, ��޴��п��� ����� ���� �ð�","(Mirae Campus)Class Period of native-speaking instructors for ENGLISH 4, ELEMENTARY UNIVERSITY ENGLISH, ADVANCED COLLEGE ENGLISH");
//var _wonju3 = new Array("(�̷�)���翵�, ����,�߱޴��п��� ����� ���� �ð�","(Mirae Campus)Class Period of native-speaking instructors for ENGLISH 3, BASIC UNIVERSITY ENGLISH, INTERMEDIATE UNIVERSITY ENGLISH");
var _wonju3 = new Array("(�̷�)���翵��(��,��,��,��) �̼� �ȳ�(�̼����� ���� ����)","(Mirae Campus)���翵��(��,��,��,��) �̼� �ȳ�(�̼����� ���� ����)");
var _wonju4 = new Array("(�̷�)�Ϲݹ���,�Ϲ�ȭ��,�Ϲݻ����й׽��� ù �����ð� ������� �ȳ�","(Mirae Campus)Classrooms for GENERAL PHYSICS&LABORATORY, GENERAL CHEMISTRY& LABORATORY, GENERAL BIOLOGY&LABORATORY");
var _wonju5 = new Array("(�̷�)2019-2�б� ���к� ������û ��ħ","(Mirae Campus)Course Guideline for 2019 Fall Semester for Each Department");
var _wonju6 = new Array("(�̷�)2017-2�б� 1�г� ������û �ȳ� �� �кκ� �������(2017�й�)","(Mirae Campus)Registration Guideline and Graduation Requirements for the students admitted in 2017");
var _wonju6_1 = new Array("(�̷�)2020-1�б� 1�г�(2020�й�) ������û �ȳ�","(Mirae Campus)Registration Guideline for the students admitted in 2020");
//var _wonju6_1 = new Array("(�̷�)2019-2�б� 1�г�(2019�й�) ������û �ȳ�","(Mirae Campus)Registration Guideline for the students admitted in 2019");
var _wonju6_2 = new Array("(�̷�)�й��� ������� �ȳ�","(Mirae Campus)Graduation Requirements for the students");

//var _wonju7 = new Array("(�̷�)���翵�� �ֿ� ���� ����","(Mirae Campus)Major Changes to ENGLISH(Liberal Arts) Courses ");
var _wonju7 = new Array("(�̷�)����Ȱ�� ������ ���� �������� �̼� �ȳ�","(Mirae Campus)����Ȱ�� ������ ���� �������� �̼� �ȳ� ");
var _wonju8 = new Array("(�̷�)ĸ��������� ������ �����ȳ�","(Mirae Campus)Capstone Design Guide");
var _wonju9 = new Array("(�̷�)â������ ������ �������� ���� �ȳ�","(Mirae Campus)��������(â������)�������� ���� �ȳ�");
var _wonju10 = new Array("������û�ý��� �̿� �� Ÿ���� ���̵� �����ϰų�, ��ũ�� ��� �� ������������ ������û�� ��� ó���� �޽��ϴ�.","������û�ý��� �̿� �� Ÿ���� ���̵� �����ϰų�, ��ũ�� ��� �� ������������ ������û�� ��� ó���� �޽��ϴ�.");
var _wonju11 = new Array("�̷�ķ�۽� ������û ����� ���̹�ī��(�ȳ� �� ����)","�̷�ķ�۽� ������û ����� ���̹�ī��(�ȳ� �� ����)");

var _campusmap = new Array("ķ�۽���", "Campus Map");
var _campusmap_s = new Array("����ķ�۽�", "Sinchon Campus");
var _campusmap_i = new Array("����ķ�۽�", "International Campus");
var _campusmap_w = new Array("�̷�ķ�۽�", "Mirae Campus");

var _msg_e1 = new Array("* �����б� ���� ���濡 ���� �ֿ� �ȳ�����<br/>�߰�����Ⱓ(2019.10.21. - 10.25.) �� �⸻����Ⱓ(2019.12.9. - 12.20.)�� ����Ͽ� ������ �̷������ �ʴ� �ֿ��� ���� �Ǵ� �����н��� �����Ͽ��� ��.", 
"* Notice for changes in semester based Regular Exchange/Visiting Program <br/>During midterm and final exam period, students who do not have exams should do self-studying or take lectures.");
var _msg_e2 = new Array("* 2014�г⵵ 1�б���ʹ� 15~16������ �����н� �� �⸻��� �Ⱓ���� ����˴ϴ�. ",
"* Starting from the first semester of 2014, Week 15-16 has been changed to self-studying/final exam period.");
var _msg_e3 = new Array("* �������б� ��Ģ ��57���� 2�� �ǰ��Ͽ�, ����л��� �б� ���� ���Ŀ� ������ ��米������ ����� ���� �⼮, ����, ���� �� ���迡 ���� �����н����� ������ ��û�� �� ������, ��û�� ���׿� ���� ��米�� �Ǵ� ����л��������� ���� �������� �� �ֽ��ϴ�. ����, ���� �� ���� ���� ��, ������ ��������� ������ ���� �Ʒ��� �����ϴ�.<br/>(��, ���� ���� ������ ���� Ư���� ���� �޶��� �� �ֽ��ϴ�.)<br/>[����]<br/>- �ð����: ��������(������, ����, Ȯ�뱳�� ��), ���ʵ���� ���<br/>- ��ü���: ��������(�����б���), ���� �� �������� ����� ���, �����¼� ����<br/>- û�����: ����/�����뿪 ����� ���, ���� ���� ���<br/>- �������/�������: ���ʵ���� �� ���� ���� ���<br/>[���� �� ����]<br/>- �ð����/��ü���/û�����: ���� ������� ����, ���� �� ������ ����, ����ð� ����, ���蹮�� �� ���� ��� ����, ���� ��� ����, ���ʵ���� ���� ��<br/>- �������/�������: ����ȭ ���� ���� �� ��ü �� �ǽ� ���� ",
"* According to the University regulation section 57-2, students with disabilities can request special support related to attendance, lectures, assignments, or exams by contacting the course professor at the beginning of semester.Upon request, students can receive such support from the course professor or from the Office for Students with Disabilities(OSD). The following are examples of types of support available in the lectures, assignments, and exams:<br/>(However, actual support may vary depending on the course.)<br/>[Lecture]<br/>- Visual Impairment: alternative, braille, enlarged reading materials, note-taker<br/>- Physical Impairment: alternative reading materials, access to classroom, note-taker, assigned seat<br/>- Hearing Impairment: note-taker/stenographer, recording lecture<br/>- Intellectual Disability/Autism: note-taker, study mentor<br/>[Assignments and Exam]<br/>- Visual, Physical, Hearing Impairment: extra days for submission, alternative type of assignment, extended exam time, alternative type of exam, arranging separate exam room, and proctors, note-taker<br/>- Intellectual Disability/Autism: personalized assignments, alternative type of evaluation");



//������û���� ../SG/sg13_r021.jsp
var _hakbun = new Array("�й�","Student ID No.");
var _name = new Array("����","Name");
var _jaehak = new Array("���б���","Enrollment Status");
var _sosok = new Array("�Ҽ�","Department");
var _degree = new Array("����","Degree");
var _jinhak = new Array("���б���","Advancement Status");
var _sex = new Array("����","Sex");
var _byunymd = new Array("����������","Date of Status Change");
var _maxstudy = new Array("�ִ��������","Maximum Credit");
var _withdraw = new Array("öȸ","Withdrawal");
var _hakgi = new Array("�б�","Semester");
var _bb = new Array("�й�","Sec.");
var _sbb = new Array("�ǽ�","Lab");
var _schakjum = new Array("��û����","Current Semester Credits");
var _chplseat = new Array("ä���¼�","Chapel Seat No.");

//���νð�ǥ	../sg/sg13_r090.jsp
var _ktime = new Array("����","Time");
var _mon = new Array("��","Mon");
var _tue = new Array("ȭ","Tue");
var _wed = new Array("��","Wed");
var _thu = new Array("��","Thu");
var _fri = new Array("��","Fri");
var _sat = new Array("��","Sat");
var _sun = new Array("��","Sun");

//��������ȸ	../kk/kk05_i020.jsp
var _sugangkna = new Array("����������","Course Title");
var _seq = new Array("��ȣ","Seq");
var _assignment = new Array("������","Assignments");
var _file = new Array("����","File");
var _hit = new Array("��ȸ","Page View");
var _regdate = new Array("�����","Registered Date");
var _uptdate = new Array("������","Date of Change");
var _msg6 = new Array("��ϵ� �������� �����ϴ�.","Registered assignments not found");
var _msg7 = new Array("���� �������� �������ֽʽÿ�.","Select the Course");
var _assdisplay = new Array("������ ��ȸ","Course Assignments");
var _content = new Array("��������","Contents");

//���ϰ�����ȸ ../sg/sg13_r111.jsp
var _iden  = new Array("���ϱ����� ��ȸ","Identical Courses");
var _msg8 = new Array("���ϱ�����(���������)�ȳ�","Identical Courses with Changed Title, Code or Credit");
var _before = new Array("���� ��","Before");
var _after = new Array("���� ��","After");

//������ȹ�� ��ȸ ../kk/kk04_r010pop2.jsp
var _referdata = new Array("�����ڷ�","Reference Data");
var _office = new Array("������","Office");
var _telephone = new Array("����ó","Telephone");
var _msg9 = new Array("e-mail �� ���ð�","e-mail & Office Hour");
var _goal = new Array("������ǥ �� ����","Course Description & Goals");
var _prerequisite = new Array("��������(�����н�)","Prerequisite");
var _gangwoon = new Array("���¿���","Course Requirements");
var _grademethod = new Array("�����򰡹��","Grading Policy");
var _texts = new Array("���� �� ������","Texts & References");
var _profinf = new Array("��������","Instructor's Profile");
var _ta = new Array("��������","TA's Name & Contact Information");
var _eng_content_2 = new Array("����<br>������ȹ����<br>Syllabus in English","Syllabus in English");
var _eng_content = new Array("���� ������ȹ����<br>Syllabus in English","Syllabus in English");
var _eng_content_memo = new Array("* ������ǥ �� ����, �����򰡹������ �������� �ۼ��Ͽ� �ֽñ� �ٶ��ϴ�.","");
var _week = new Array("��","Week");
var _period = new Array("�Ⱓ","Period");
var _sycontent = new Array("��������","Weekly Topic & Contents");
var _msg10 = new Array("�������,������","Course Material Range & Assignments");
var _remark = new Array("���","Reference");
var _contribution = new Array("�⿩��","Contribution");
var _achievement = new Array("�н� ����","Achievement");
var _msg11 = new Array("�н����� �޼��� ���� ���� ����","Course of study for the purpose of achievement and learning");
var _msg12 = new Array("ABEEK  ���α׷� �н����� �޼��� ���� �� ������ �⿩��","Evaluation of the course based on its effectiveness in helping you reach your achievement goals for ABEEK.");
var _msg13 = new Array("ũ�� �⿩��","High");
var _msg14 = new Array("���� �⿩��","Regular");
var _msg15 = new Array("�⿩���� ����","Low");
var _msg16 = new Array("�⿩���� ����","None");
var _nodown_msg = new Array("�л���� > �α��� > ���� > ��� > ������� > ������ȹ�� ��ȸ ȭ�鿡�� �ٿ� �����մϴ�.","Download available at Academic Management System > Login > Course > Catalogue > Course Catalogue > Syllabus.");


//���ΰ��ǽð�ǥ ../kk/kk06_r013.jsp
var _msg17 = new Array("Ư�����п� �������� 1���ô� �� ������� ������ ���۽ð�(��: ���� 7��)�� �ٸ��Ƿ�, ������ Ʋ���� ǥ�õ� �� �ֽ��ϴ�.","Special graduate schools set their own starting times for their first classes and the system may not reflect these differences.");


//������ȹ�� ��� ../kk06_r022.jsp
var _schangedate = new Array("���ʵ����","Created Date");
var _changedate = new Array("����������","Last-Modified");
var _browse = new Array("��ȸ","Browse");
var _save = new Array("����","Save");
var _remark1 = new Array("�л�����","Academic Schedule");
var _msg17 = new Array("ABBEK ���� ������ȹ �ۼ�","Syllabi for ABBEK accreditation");
var _msg18 = new Array("�г⵵ �б⸦ �������ֽʽÿ�","Select the year and semester.");
var _msg33 = new Array("������ȹ�� ���� �ڷ� ��������","Get previous data");
var _msg34 = new Array("��Ÿ ���� ��ȸ","Browse the others.");


//������ȹ�� ��� ../kk06_r024.jsp

//������ ���	../kk06_r022.jsp
var _msg19 = new Array("���ε��� ���� �̸����� Ư�����ڸ� ����� �� �����ϴ�.","Avoid special characters in the file names to attach.");
var _msg20 = new Array("���Ǳ����� ���� ������ �ι� ��ȸ�Ǵ� ��쿡�� �� �� ��ο� ���� �������� �������� ����ϼž� �մϴ�.","If your course is co-listed in more than two institutions, upload the file to each institution.");
var _kakna = new Array("���Ǳ�����","Course");
var _delete = new Array("����","Delete");
var _modify = new Array("����","Modify");
var _add = new Array("�߰�","Add");
var _msg21 = new Array("������ ���","Register Assignments");
var _attach = new Array("����÷��","Attach File");
var _msg22 = new Array("����ũ��� 10 Mbyte����","The file size to attach should be 10 Mbyte or smaller.");
var _msg23 = new Array("���� ��������","Previous Page");

//�����ڷ� ���� ./kk06_r032.jsp
var _msg24 = new Array("EXCEL ���Ϸ� �ް��� �ϴ� ������ �����Ͻ� �� ���ϴٿ� ��ư�� Ŭ���ϼ���.","To send the  roster in MS Excel file, select the course and click on the download button.");
var _msg25 = new Array("������ ������ ����ġ�� ū ��� ���ϻ����� ���� ������ �ֽ��ϴ�.","If the data is too big, the file may not be created.");
var _msg26 = new Array("�������� ����� ���ϴ� ���ϸ��� �Է��Ҷ� �ݵ�� Ȯ���ڸ��� .xls�� �Է��Ͻñ� �ٶ��ϴ�. Ȯ���ڸ��� .xls�� �ְԵǸ� EXCEL���� ������ �ٷ� �о�� �� �ֽ��ϴ�.","To open the file from MS Excel application, identify the file extension as xls when you save the file.");
var _msg27 = new Array("<b><font color=blue>�ٿ�ε尡 �ȵ� ���</font> �ͽ��÷ξ� �޴��� <font color=blue>[����] - [���ͳݿɼ�] - [����]</font>���� <font color=blue>[���ͳ�]</font>�� �����Ͻ� �� �Ʒ��� <font color=blue>[����� ���� ����] - [�ٿ�ε�] - [���� �ٿ�ε忡 ���� �ڵ� Ȯ��]</font> �ɼ��� <font color=blue>[���]</font>���� �����Ͻ� �� ��õ��Ͻñ� �ٶ��ϴ�.</font></b>","If you fail at downloading the files, change your browser setting as follows and try again. Choose ��Option��- ��Internet Option��- ��Security��menu, and then click��Selecting Custom Level Settings��button and set the ��File Download��option box to [Enable]");


//������ȹ�� �����ڷ� ��� ./kk06_r027.jsp
var _msg28 = new Array("������ ������ȹ���� ����� �ڷ�θ� ���Ǹ� ������ȹ���� ��ü�� ���� �����ϴ�.","File is used only for references on the syllabus and cannot be substituted for a syllabus.");
var _msg29 = new Array("���ε�� ������ ��������� ������ȹ�� ��ȸ�� ������ �ٿ���� �� �ְ� �˴ϴ�.","Uploaded file can be accessed by anyone while searching the syllabus.");
var _msg30 = new Array("���ε��� ���� �̸����� Ư�����ڸ� ����� �� ������ ������ ������ 3�� ���Ϸ� �÷��ֽñ� �ٶ��ϴ�.","Uploaded file name should not contain any special characters and uploading is limited to 3 files.");
var _msg31 = new Array("������ȹ��<br>���� �ڷ� ���","Register for Additional References on the Syllabus");
var _msg32 = new Array("����ũ��� 10 Mbyte���ϸ� �����մϴ�.","Attached file size cannot exceed 10 Mbytes.");

var _nodata = new Array("�˻��� �ڷᰡ �����ϴ�.","No matched data found.");
var _rpcnt = new Array("C- �̻� ����� Ƚ��","Count of Repeated Course(A,B,C)");


//����öȸ ../sg13_u010.jsp
var _wreason = new Array("öȸ����","Reason");
var _wapply = new Array("��û","Apply");
var _appliedkna = new Array("����öȸ ����","Courses applied for withdrawal");
var _applykna = new Array("����öȸ ��û","Apply for withdrawal");
var _print = new Array("�μ�","Print");
var _cancel = new Array("���","Cancel");
var _speriod = new Array("���񽺱Ⱓ","Service Periods");
var _ttime = new Array("���� ���񽺽ð�","Services Available");
var _gcontent = new Array("��������","Contents");
var _notice = new Array("��������","Notices");

// ���п�����öȸ ../sg13_g_u010.jsp
var _sprof = new Array("���ӱ���","Professor");
var _g_appdate = new Array("����öȸ ��û���","Time applied for withdrawal");
var _g_admdate = new Array("��米�� ����/�ź� ��� ","Time approved for withdrawal by instructor");
var _g_admdate1 = new Array("��米�� ���α�� ","Time approved for withdrawal by instructor");
var _g_sadmdate = new Array("���ӱ��� ����/�ź� ���","Time approved for withdrawal by professor");
var _g_appliedkna = new Array("����öȸ ��û ���","Courses applied for withdrawal");
var _g_approvedkna = new Array("����öȸ ����/�ź� ��Ȳ","Courses approved for withdrawal");
var _g_wapprove = new Array("����","Apply");
var _g_wdeny = new Array("�ź�(�źλ����Է�)","Deny");
var _g_capprove = new Array("���","Cancel");
var _g_wreason = new Array("����öȸ����","Reason");

var _g1 = new Array(": ���п�������(�к���������)",": Graduate Course Taken (Approved for Undergraduate credit)");
var _g2 = new Array(": ���п�������(���п���������) ",": Graduate Course Taken (Approved for graduate credit)");


// ���ϸ��� ������û
var _mileage_title = new Array("�� ���ϸ��� ������û���", "�� Mileage Results");
var _mileage_hyhg = new Array("�г⵵ �б�", "Yaer and semester");


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
